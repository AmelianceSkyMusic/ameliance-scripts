import { PACKAGE_NAME } from '../constants/PACKAGE_NAME ';
import { returnError } from './returnError';

export type WriteTextToClipboardReturn = boolean;

export async function writeTextToClipboard(text: string): Promise<WriteTextToClipboardReturn> {
	if (text) {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch (error) {
			throw new Error(returnError(error, PACKAGE_NAME));
		}
	}
	return false;
}
