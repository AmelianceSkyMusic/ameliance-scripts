/**
 * A utility function to get a value from an object based on a given key.
 *
 * This function is useful when you need to get a value from an object based on a
 * dynamic key, while also providing a default value if the key is not present
 * in the object.
 *
 * @example
 * const options = {
 * 	apple: 'red',
 * 	banana: 'yellow',
 * 	_: 'unknown',
 * };
 *
 * const color = getMatch('apple', options); // red
 * const unknownColor = getMatch('orange', options); // unknown
 *
 * @param code The key to look up in the object
 * @param values The object containing the values
 * @returns The value associated with the key, or the default value if the key is not present
 */
export function getMatch<C extends PropertyKey, M>(
	code: C | undefined | null,
	values: Partial<Record<C, M>> & { _: M },
): M {
	if (code == null || code === undefined || !(code in values)) return values._;
	const value = values[code];
	return value === undefined ? values._ : value;
}
