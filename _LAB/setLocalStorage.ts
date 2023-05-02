import { PACKAGE_NAME } from '../constants/PACKAGE_NAME ';
import { returnError } from '../scripts/returnError';

export function setLocalStorage<T>(appName: string, store: string, group: string, value: T) {
	const setLocalStorageItem	= <
		K extends Record<string, Record<string, string>>,
		J extends Record<string, K>,
		D>(storeObj: J, localValue: D) => {
		const newStoreObj = {
			...storeObj,
			[store]: {
				...storeObj?.[store],
				[group]: {
					...storeObj?.[store]?.[group],
					...localValue || null,
				},
			},
		};
		localStorage.setItem(appName, JSON.stringify(newStoreObj));
	};

	try {
		const appStorage = localStorage.getItem(appName);
		const appStorageObj = appStorage ? JSON.parse(appStorage) : {};
		setLocalStorageItem(appStorageObj, value);
	} catch (error) {
		returnError(error, PACKAGE_NAME);
	}
}
