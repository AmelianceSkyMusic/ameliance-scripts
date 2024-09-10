import { PACKAGE_NAME } from './constants/package-name';
import { errorHandler } from './error-handler';

export function getObjKeyByValue<T>(object: Record<string, T>, value: T): string | undefined {
	try {
		return Object.keys(object).find((key) => object[key] === value);
	} catch (error) {
		errorHandler({ error, title: PACKAGE_NAME });
	}
	return undefined;
}
