export function generateResponseJsonSuccess(data?: unknown) {
	return Response.json(data || {}, { status: 200, statusText: 'ok' });
}
