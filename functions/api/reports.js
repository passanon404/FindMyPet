import { json, error } from '../_utils';

/**
 * GET /api/reports — List reports ordered by newest first
 * POST /api/reports — Create a new report (multipart/form-data with photo)
 */
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const method = request.method;

  // CORS preflight
  if (method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (method === 'GET') {
    try {
      const page = parseInt(url.searchParams.get('page') || '1');
      const limit = parseInt(url.searchParams.get('limit') || '50');
      const offset = (page - 1) * limit;
      const filter = url.searchParams.get('filter') || 'all';

      let sql, bindings;

      if (filter === 'all') {
        sql = 'SELECT * FROM reports ORDER BY created_at DESC LIMIT ? OFFSET ?';
        bindings = [limit, offset];
      } else {
        sql = 'SELECT * FROM reports WHERE condition = ? ORDER BY created_at DESC LIMIT ? OFFSET ?';
        bindings = [filter, limit, offset];
      }

      const { results } = await env.findmypet_db.prepare(sql).bind(...bindings).all();

      const { results: countResult } = await env.findmypet_db.prepare(
        filter === 'all'
          ? 'SELECT COUNT(*) as total FROM reports'
          : 'SELECT COUNT(*) as total FROM reports WHERE condition = ?'
      ).bind(...(filter === 'all' ? [] : [filter])).all();

      const total = countResult[0]?.total || 0;

      return json({ reports: results, total, page, totalPages: Math.ceil(total / limit) });
    } catch (e) {
      return error(500, 'Failed to fetch reports: ' + e.message);
    }
  }

  if (method === 'POST') {
    try {
      let body;
      let photoBase64 = null;
      const contentType = request.headers.get('Content-Type') || '';

      if (contentType.includes('multipart/form-data')) {
        // Handle multipart form data (with photo upload)
        const formData = await request.formData();
        body = {};
        for (const [key, value] of formData.entries()) {
          if (value instanceof File) {
            // Handle photo upload
            if (value.size > 0) {
              const buffer = await value.arrayBuffer();
              const bytes = new Uint8Array(buffer);
              let binary = '';
              for (let i = 0; i < bytes.length; i++) {
                binary += String.fromCharCode(bytes[i]);
              }
              photoBase64 = 'data:' + value.type + ';base64,' + btoa(binary);
            }
          } else {
            body[key] = value;
          }
        }
      } else {
        body = await request.json();
      }

      const {
        animal_type, animal_type_custom, condition, title,
        location, description, contact, reporter_name,
        house_no, village_lane, road,
        sub_district, district, province, postal_code,
        latitude, longitude
      } = body;

      if (!animal_type || !condition) {
        return error(400, 'animal_type and condition are required');
      }

      // ถ้าไม่มี location ให้สร้างจากที่อยู่
      if (!location || !location.trim()) {
        const addrParts = [house_no, village_lane, road, sub_district, district, province, postal_code].filter(Boolean);
        location = addrParts.length > 0 ? addrParts.join(', ') : 'ไม่ระบุสถานที่';
      }

      const { results } = await env.findmypet_db.prepare(
        `INSERT INTO reports
         (animal_type, animal_type_custom, condition, title, location, description, contact, reporter_name,
          photo, house_no, village_lane, road, sub_district, district, province, postal_code, latitude, longitude)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         RETURNING *`
      ).bind(
        animal_type,
        animal_type_custom || null,
        condition,
        title || null,
        location || null,
        description || null,
        contact || null,
        reporter_name || null,
        photoBase64,
        house_no || null,
        village_lane || null,
        road || null,
        sub_district || null,
        district || null,
        province || null,
        postal_code || null,
        latitude ? parseFloat(latitude) : null,
        longitude ? parseFloat(longitude) : null
      ).all();

      return json({ report: results[0] }, 201);
    } catch (e) {
      return error(500, 'Failed to create report: ' + e.message);
    }
  }

  return error(405, 'Method not allowed');
}
