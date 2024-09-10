import { isObjectEmpty } from './is-object-empty';

export function isObjectHasValue<T extends string | number>(object: Record<string, T>, value: T) {
	if (isObjectEmpty(object)) throw new Error('Object is empty');
	return Object.values(object).includes(value);
}
