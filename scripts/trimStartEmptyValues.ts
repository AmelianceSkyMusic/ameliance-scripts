import { isObject } from './is-object';

type ArrItem = string;
type ObjItem = Record<string, string | number>;

export function trimStartEmptyValues(
	array: ArrItem[] | ObjItem[],
	key?: string,
): ArrItem[] | ObjItem[] {
	const arrayFirstItem = array[0];
	if (typeof arrayFirstItem !== 'string' && !isObject(arrayFirstItem)) throw new Error('Invalid value');
	if (isObject(arrayFirstItem) && !key) throw new Error('No key provided');

	const arrayCopy = array.slice();

	let lastColumnRow = 0;
	if (!key && typeof arrayFirstItem === 'string') {
		lastColumnRow = (arrayCopy as ArrItem[]).findIndex((cell) => cell !== '');
	} else if (key && typeof arrayFirstItem !== 'string') {
		lastColumnRow = (arrayCopy as ObjItem[]).findIndex((cell) => cell[key] !== '');
	}
	return arrayCopy.splice(lastColumnRow);
}
