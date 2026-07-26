import { json, error } from '../../_utils';

/**
 * GET /api/reports/:id — Get single report
 * DELETE /api/reports/:id — Delete a report
 */
export async function onRequest(context) {
  const { request, env, params } = context;
  const method = request.method;
  const id = params.id;

  if (!id) {
    return error(400, 'Report ID is required');
  }

  if (method === 'GET') {
    try {
      const { results } = await env.findmypet_db.prepare(
        'SELECT * FROM reports WHERE id = ?'
      ).bind(id).all();

      if (results.length === 0) {
        return error(404, 'Report not found');
      }

      return json({ report: results[0] });
    } catch (e) {
      return error(500, 'Failed to fetch report: ' + e.message);
    }
  }

  if (method === 'DELETE') {
    try {
      const { results } = await env.findmypet_db.prepare(
        'DELETE FROM reports WHERE id = ? RETURNING id'
      ).bind(id).all();

      if (results.length === 0) {
        return error(404, 'Report not found');
      }

      return json({ deleted: true, id: results[0].id });
    } catch (e) {
      return error(500, 'Failed to delete report: ' + e.message);
    }
  }

  return error(405, 'Method not allowed');
}
