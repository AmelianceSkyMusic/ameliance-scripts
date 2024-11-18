export type ValueType =
	| 'string'
	| 'number'
	| 'boolean'
	| 'date'
	| 'array'
	| 'object'
	| 'null'
	| 'undefined'
	| 'function'
	| 'symbol'
	| 'bigint';

/**
 * Determine the type of a value.
 *
 * Returns one of the following:
 * - 'string' if value is a string
 * - 'number' if value is a number
 * - 'boolean' if value is a boolean
 * - 'date' if value is a Date
 * - 'array' if value is an array
 * - 'object' if value is a plain object
 * - 'null' if value is null
 * - 'undefined' if value is undefined
 * - 'function' if value is a function
 * - 'symbol' if value is a symbol
 * - 'bigint' if value is a bigint
 *
 * @param value - the value to determine the type of
 * @returns - the type of the value
 */
export function getValueType(value: unknown): ValueType {
	if (value === null) return 'null';
	if (value === undefined) return 'undefined';
	if (value instanceof Date) return 'date';
	if (Array.isArray(value)) return 'array';
	return typeof value;
}
