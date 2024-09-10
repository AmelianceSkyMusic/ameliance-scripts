import { isObject } from './is-object';

export function sortArrayLocalCompare<T, K extends string | number>(array: T[], key?: K): T[] {
	const arrayCopy = array.slice();
	const arrayFirstItem = arrayCopy[0];

	if (
		typeof arrayFirstItem !== 'string' &&
		typeof arrayFirstItem !== 'number' &&
		!isObject(arrayFirstItem) &&
		!Array.isArray(arrayFirstItem)
	) {
		throw new Error('Invalid value');
	}

	if ((isObject(arrayFirstItem) || Array.isArray(arrayFirstItem)) && !key) {
		throw new Error('No key provided');
	}

	if (Array.isArray(arrayFirstItem) && typeof key === 'string') {
		throw new Error('Key should be array index number');
	}

	let result: T[] = [];

	if (typeof arrayFirstItem === 'string' || typeof arrayFirstItem === 'number') {
		result = arrayCopy.sort((a, b) => {
			const aKey = String(a);
			const bKey = String(b);
			return aKey.localeCompare(bKey);
		});
	}

	if (isObject(arrayFirstItem) && key) {
		result = arrayCopy.sort((a, b) => {
			const aKey = String((a as Record<K, unknown>)[key]);
			const bKey = String((b as Record<K, unknown>)[key]);
			return aKey.localeCompare(bKey.toString());
		});
	}

	if (Array.isArray(arrayFirstItem) && key && typeof key === 'number') {
		result = arrayCopy.sort((a, b) => {
			const aKey = String((a as unknown[])[key]);
			const bKey = String((b as unknown[])[key]);
			return aKey.localeCompare(bKey);
		});
	}

	return result;
}
