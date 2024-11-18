import type { ValueType } from './get-value-type';

/**
 * Determine the type of a value.
 *
 * If the value is a string, will return one of the following:
 * - 'date' if the string can be parsed as a Date
 * - 'number' if the string can be parsed as a number
 * - 'boolean' if the string is either 'true' or 'false'
 *
 * Will return one of the following for other types:
 * - 'null' if null
 * - 'undefined' if undefined
 * - 'number' if number
 * - 'boolean' if boolean
 * - 'symbol' if symbol
 * - 'bigint' if bigint
 * - 'function' if function
 * - 'array' if Array
 * - 'object' if plain object
 *
 * Otherwise will return 'string'
 *
 * @param value - the value to determine the type of
 * @returns - the type of the value
 */
export function detectValueType(value: unknown): ValueType {
	if (value === null) return 'null';
	if (value === undefined) return 'undefined';

	if (typeof value === 'string') {
		if (!isNaN(Date.parse(value))) return 'date';
		if (!isNaN(Number(value))) return 'number';
		if (value === 'true' || value === 'false') return 'boolean';
		return 'string';
	}

	if (typeof value === 'number') return 'number';
	if (typeof value === 'boolean') return 'boolean';
	if (typeof value === 'symbol') return 'symbol';
	if (typeof value === 'bigint') return 'bigint';
	if (typeof value === 'function') return 'function';

	if (Array.isArray(value)) return 'array';
	if (value instanceof Date) return 'date';

	if (typeof value === 'object') return 'object';

	return 'string';
}
