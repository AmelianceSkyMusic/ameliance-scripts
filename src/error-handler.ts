import { joinWith } from './join-with';
import { log } from './log';

export type ReturnErrorHandler = {
	status: number;
	message: string;
	code?: string;
};

export type ErrorHandler = {
	error: unknown;
	status?: number;
	message?: string;
	code?: string;
	title?: string;
	errorDepth?: number;
	showConsoleError?: boolean;
	wrapperCount?: number;
};

export function errorHandler({
	error,
	status = -1,
	message = 'Sorry, something went wrong ¯\\_(ツ)_/¯!',
	code,
	title = 'AMELIANCE SCRIPTS',
	errorDepth = Infinity,
	showConsoleError = true,
	wrapperCount = 0, //* WrapperCount - a parameter that sets the number of wrappers around the function to shift the error array
}: ErrorHandler): ReturnErrorHandler {
	const errorCount = 2 + wrapperCount;
	const errorDeep = wrapperCount < 0 ? 0 : errorDepth;

	const errorInfo: ReturnErrorHandler = {
		status,
		message,
	};

	if (error) {
		if (error instanceof Error) {
			errorInfo.message = error.message;
			errorInfo.code = error.name;
		}

		if (typeof error === 'string') errorInfo.message = error;

		if (typeof error === 'object' && error !== null) {
			if ('status' in error && typeof error.status === 'number') {
				errorInfo.status = error.status;
			}
			if ('message' in error && typeof error.message === 'string') {
				errorInfo.message = error.message;
			}
			if ('code' in error && typeof error.code === 'string') {
				errorInfo.code = error.code;
			}
		}
	}
	if (showConsoleError) {
		const errorTitle = `${title} >`;
		const errorSubtitle = `${joinWith(' | ', status, code, message)}`;

		const subtitleStyle = `
			background-color: hsla(0, 0%, 0%, 0.5);
			color: white;
			border-radius: 4px;
			padding: 2px 4px;
			margin-bottom: 4px;
		`;

		log.error(
			errorTitle,
			[errorSubtitle, subtitleStyle],
			[`\n${new Error().stack?.split('\n').splice(errorCount, errorDeep).join('\n')}`, ''],
		);
	}

	return errorInfo;
}
