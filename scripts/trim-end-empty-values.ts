import { isObject } from './is-object';

type ArrItem = string;
type ObjItem = Record<string, string | number>;

export function trimEndEmptyValues(
	array: ArrItem[] | ObjItem[],
	key?: string,
): ArrItem[] | ObjItem[] {
	const arrayCopy = array.slice();
	const arrayFirstItem = arrayCopy[0];
	if (typeof arrayFirstItem !== 'string' && !isObject(arrayFirstItem)) throw new Error('Invalid value');
	if (isObject(arrayFirstItem) && !key) throw new Error('No key provided');

	let lastColumnRow = 0;
	if (!key && typeof arrayFirstItem === 'string') {
		lastColumnRow = array.length - (arrayCopy as ArrItem[]).reverse().findIndex((cell) => cell !== '');
	} else if (key && typeof arrayFirstItem !== 'string') {
		lastColumnRow = array.length - (arrayCopy as ObjItem[]).reverse().findIndex((cell) => cell[key] !== '');
	}
	return arrayCopy.reverse().splice(0, lastColumnRow);
}
