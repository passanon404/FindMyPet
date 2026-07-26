import { json, error } from '../_utils';

/**
 * GET /api/types — List animal types
 * POST /api/types — Add new animal type
 */
export async function onRequest(context) {
  const { request, env } = context;
  const method = request.method;

  if (method === 'GET') {
    try {
      const { results } = await env.findmypet_db.prepare(
        'SELECT * FROM animal_types ORDER BY id ASC'
      ).all();
      return json({ types: results });
    } catch (e) {
      return error(500, 'Failed to fetch types: ' + e.message);
    }
  }

  if (method === 'POST') {
    try {
      const body = await request.json();
      const { name } = body;

      if (!name || !name.trim()) {
        return error(400, 'Type name is required');
      }

      const { results } = await env.findmypet_db.prepare(
        'INSERT INTO animal_types (name) VALUES (?) RETURNING *'
      ).bind(name.trim()).all();

      return json({ type: results[0] }, 201);
    } catch (e) {
      if (e.message?.includes('UNIQUE constraint')) {
        return error(409, 'Animal type already exists');
      }
      return error(500, 'Failed to create type: ' + e.message);
    }
  }

  return error(405, 'Method not allowed');
}
