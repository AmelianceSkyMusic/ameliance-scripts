const UNKNOWN_STATUS = 520;
const UNKNOWN_MESSAGE = 'Sorry, something went wrong ¯\\_(ツ)_/¯!';

type ErrorOptions = {
	statusText?: string;
	status?: number;
};

type GenerateResponseJsonError<ServerErrorCode> = {
	status?: number;
	statusText?: string;
	code?: ServerErrorCode;
	data?: Record<string, unknown>;
};

export function generateResponseJsonError<ServerErrorCode>({
	status,
	statusText,
	code,
	data,
}: GenerateResponseJsonError<ServerErrorCode>) {
	const errorBody = { ...data };
	if (code) errorBody.code = code;

	const errorOptions: ErrorOptions = {};
	if (status) errorOptions.status = status || UNKNOWN_STATUS;
	if (statusText) errorOptions.statusText = statusText || UNKNOWN_MESSAGE;

	return Response.json(errorBody, errorOptions);
}
