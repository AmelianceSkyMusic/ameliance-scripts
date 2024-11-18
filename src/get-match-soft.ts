/**
 * Like {@link getMatch}, but returns `null` instead of throwing if `code` is not found in `values`.
 *
 * @param code - The code to look up in `values`.
 * @param values - An object with one or more case values.
 * @returns The value associated with `code` if it exists, otherwise `values._` if it exists, otherwise `null`.
 */
export function getMatchSoft<C extends PropertyKey, M>(
	code: C | undefined | null,
	values: Partial<Record<C, M>> & { _?: M },
): M | null {
	if (code === undefined || code === null || !(code in values)) return values._ ?? null;
	return values[code] ?? values._ ?? null;
}
