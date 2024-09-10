function flatObjectKeysToArray(obj: object): string[] | [] {
	const entries = Object.entries(obj);
	if (entries.length > 0) {
		return entries.map((tuple) => (tuple[1] ? tuple[0] : '')).filter((element) => element);
	}
	return [];
}

export function join(...args: unknown[]): string {
	return args
		.flat(Infinity)
		.map((element) => {
			if (element && typeof element === 'object') {
				const flatObjectKeysArray = flatObjectKeysToArray(element);
				return flatObjectKeysArray ? flatObjectKeysArray.join(' ') : '';
			}
			return element;
		})
		.filter((element) => element)
		.join(' ')
		.trim();
}
