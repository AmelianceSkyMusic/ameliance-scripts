import { isObject } from './isObject';

function getGroupSymbol<T, K extends string | number>(item: T, key?: K): string {
	if (typeof item === 'string') return item[0];
	if (isObject(item) && key) {
		return String((item as Record<K, unknown>)[key])[0];
	}
	if (Array.isArray(item) && key && typeof key === 'number') {
		return String((item as unknown[])[key])[0];
	}
	return '';
}

export function groupBy<T, K extends string | number>(
	array: T[],
	key?: K,
): [string, T[]][] {
	const arrayFirstItem = array[0];

	if (typeof arrayFirstItem !== 'string' && !isObject(arrayFirstItem) && !Array.isArray(arrayFirstItem)) {
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
		const groupKey = getGroupSymbol(arrayElement, key || undefined);
		if (group.has(groupKey)) {
			group.set(groupKey, [...group.get(groupKey), arrayElement]);
		} else {
			group.set(groupKey, [arrayElement]);
		}
	});

	return Array.from(group.entries());
}
