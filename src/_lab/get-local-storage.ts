import { PACKAGE_NAME } from '../constants/package-name';
import { errorHandler } from '../error-handler';

export function getLocalStorage<T>(appName: string, store: string, key: string, initValue?: T) {
	const setLocalStorageItem = <K, D>(storeObj: Record<string, K>, value: D) => {
		localStorage.setItem(
			appName,
			JSON.stringify({
				...storeObj,
				[store]: {
					...storeObj[store],
					[key]: value,
				},
			}),
		);
	};

	try {
		const appStorage = localStorage.getItem(appName);
		const appStorageObj = appStorage ? JSON.parse(appStorage) : {};
		if (!appStorage) {
			if (initValue) setLocalStorageItem(appStorageObj, initValue);
			return initValue || null;
		}
		const storageValue = appStorageObj[store][key];
		if (!storageValue) {
			setLocalStorageItem(appStorageObj, initValue);
			return initValue || null;
		}
		return storageValue;
	} catch (error) {
		errorHandler({ error, title: PACKAGE_NAME });
		return initValue;
	}
}
