import { isObject } from './is-object';

function getGroupSymbol<T, K extends string | number>(item: T, key?: K, length = 0): string {
	if (length === 0 && typeof item === 'string') return item;
	if (typeof item === 'string') return item[0];
	if (isObject(item) && key) {
		if (length === 0) return String((item as Record<K, unknown>)[key]);
		return String((item as Record<K, unknown>)[key]).slice(0, length);
	}
	if (Array.isArray(item) && key && typeof key === 'number') {
		if (length === 0) return String((item as unknown[])[key]);
		return String((item as unknown[])[key]).slice(0, length);
	}
	return '';
}

export function groupBy<T, K extends string | number>(
	array: T[],
	key?: K,
	length = 0,
): [string, T[]][] {
	const arrayFirstItem = array[0];

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

	const group = new Map();

	array.forEach((arrayElement) => {
		const groupKey = getGroupSymbol(arrayElement, key || undefined, length);
		if (group.has(groupKey)) {
			group.set(groupKey, [...group.get(groupKey), arrayElement]);
		} else {
			group.set(groupKey, [arrayElement]);
		}
	});

	return Array.from(group.entries());
}
