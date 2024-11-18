function isPrimitive(value: unknown): boolean {
	return (
		value === null ||
		typeof value === 'undefined' ||
		typeof value === 'string' ||
		typeof value === 'number' ||
		typeof value === 'boolean'
	);
}

function deepEqual(item1: unknown, item2: unknown): boolean {
	if (item1 === item2) return true;

	if (typeof item1 !== 'object' || typeof item2 !== 'object' || item1 === null || item2 === null) {
		return item1 === item2;
	}

	const keys1 = Object.keys(item1 as object);
	const keys2 = Object.keys(item2 as object);

	if (keys1.length !== keys2.length) return false;

	return keys1.every((key) =>
		deepEqual((item1 as Record<string, unknown>)[key], (item2 as Record<string, unknown>)[key]),
	);
}

export function isArraysEqual<T>(arr1?: T[] | null, arr2?: T[] | null): boolean {
	if (!arr1 || !arr2) return arr1 === arr2;
	if (arr1.length !== arr2.length) return false;

	if (isPrimitive(arr1[0])) {
		const sortedArr1 = [...arr1].sort();
		const sortedArr2 = [...arr2].sort();
		return sortedArr1.every((value, index) => value === sortedArr2[index]);
	}

	return arr1.every((item, index) => deepEqual(item, arr2[index]));
}
