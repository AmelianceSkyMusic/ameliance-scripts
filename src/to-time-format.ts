export function toTimeFormat(totalSeconds: number): string {
	const totalMs = totalSeconds * 1000;
	const result = new Date(totalMs).toISOString().slice(11, 19);
	if (result.match(/^00/)) return result.slice(3);
	return result;
}
