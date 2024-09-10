import { isObject } from './is-object';
import { isObjectEmpty } from './is-object-empty';

export function isObjectValid<T>(obj: T): boolean {
	return isObject(obj) && !isObjectEmpty(obj as object);
}
