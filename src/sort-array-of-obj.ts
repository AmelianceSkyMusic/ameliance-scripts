import { detectValueType } from './detect-value-type';
import type { ValueType } from './get-value-type';

const compareValues = <T>(a: T, b: T, valueType: ValueType): number => {
	switch (valueType) {
		case 'date':
			return new Date(String(a)).getTime() - new Date(String(b)).getTime();
		case 'number':
			return Number(a) - Number(b);
		case 'boolean':
			return Number(Boolean(a)) - Number(Boolean(b));
		case 'string':
		default:
			return String(a).localeCompare(String(b));
	}
};

export function sortArrayOfObj<T, K extends keyof T>(
	array: T[],
	key: K,
	type?: ValueType,
	undefinedPosition: 'start' | 'end' = 'end',
): T[] {
	const arrayCopy = array.slice();

	if (!key || array.length === 0) return arrayCopy;

	//* Find first non empty value to define type
	const firstValidValue = array.find((item) => {
		const value = item[key];
		return value !== undefined && value !== null && value !== '';
	})?.[key];

	const valueType = type || detectValueType(firstValidValue);

	arrayCopy.sort((a: T, b: T): number => {
		const aValue = a[key];
		const bValue = b[key];

		const isAEmpty = aValue === undefined || aValue === null || aValue === '';
		const isBEmpty = bValue === undefined || bValue === null || bValue === '';

		if (isAEmpty && isBEmpty) return 0;
		if (isAEmpty) return undefinedPosition === 'start' ? -1 : 1;
		if (isBEmpty) return undefinedPosition === 'start' ? 1 : -1;

		return compareValues(aValue, bValue, valueType);
	});

	return arrayCopy;
}
