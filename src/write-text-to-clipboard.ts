import { PACKAGE_NAME } from './constants/package-name';
import { errorHandler } from './error-handler';

export type WriteTextToClipboardReturn = boolean;

export async function writeTextToClipboard(text: string): Promise<WriteTextToClipboardReturn> {
	if (text) {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch (error) {
			const { message } = errorHandler({ error, title: PACKAGE_NAME });
			throw new Error(message);
		}
	}
	return false;
}
