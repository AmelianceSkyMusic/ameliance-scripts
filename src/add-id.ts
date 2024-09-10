export function addId<T>(array: T[], ids?: string[]) {
	if (ids && ids.length === array.length) {
		return array.map((item, i) => ({ ...item, id: ids[i] }));
	}
	return array.map((item, i) => ({ ...item, id: i }));
}
