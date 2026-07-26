import { json, error } from '../_utils';

/**
 * GET /api/reports — List reports ordered by newest first
 * POST /api/reports — Create a new report
 */
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const method = request.method;

  if (method === 'GET') {
    try {
      const page = parseInt(url.searchParams.get('page') || '1');
      const limit = parseInt(url.searchParams.get('limit') || '50');
      const offset = (page - 1) * limit;

      const { results } = await env.findmypet_db.prepare(
        'SELECT * FROM reports ORDER BY created_at DESC LIMIT ? OFFSET ?'
      ).bind(limit, offset).all();

      const { results: countResult } = await env.findmypet_db.prepare(
        'SELECT COUNT(*) as total FROM reports'
      ).all();
      const total = countResult[0]?.total || 0;

      return json({ reports: results, total, page, totalPages: Math.ceil(total / limit) });
    } catch (e) {
      return error(500, 'Failed to fetch reports: ' + e.message);
    }
  }

  if (method === 'POST') {
    try {
      const body = await request.json();
      const { animal_type, animal_type_custom, condition, location, description, contact, reporter_name } = body;

      if (!animal_type || !condition || !location) {
        return error(400, 'animal_type, condition, and location are required');
      }

      const { results } = await env.findmypet_db.prepare(
        `INSERT INTO reports (animal_type, animal_type_custom, condition, location, description, contact, reporter_name)
         VALUES (?, ?, ?, ?, ?, ?, ?)
         RETURNING *`
      ).bind(
        animal_type,
        animal_type_custom || null,
        condition,
        location,
        description || null,
        contact || null,
        reporter_name || null
      ).all();

      return json({ report: results[0] }, 201);
    } catch (e) {
      return error(500, 'Failed to create report: ' + e.message);
    }
  }

  return error(405, 'Method not allowed');
}
