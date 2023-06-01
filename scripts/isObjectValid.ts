import { isObject } from './isObject';
import { isObjectEmpty } from './isObjectEmpty';

export function isObjectValid<T>(obj: T): boolean {
	return isObject(obj) && !isObjectEmpty(obj as object);
}
