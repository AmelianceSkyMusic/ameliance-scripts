/* eslint-disable no-console */
type Args = Array<unknown> | [Array<unknown>, Array<string>];

type LogMethod = (message: string, ...args: Args) => void;

type Log = {
	info: LogMethod;
	success: LogMethod;
	warn: LogMethod;
	error: LogMethod;
};

const commonStyles = `
color: white;
border-radius: 4px;
padding: 2px 4px;
font-weight: bold;
margin-bottom: 4px;
`;

const infoStyle = `
background-color: blue;
`;

const successStyle = `
background-color: green;
`;

const warnStyle = `
background-color: darkorange;
`;

const errorStyle = `
background-color: red;
`;

function prepareLog(
	type: 'log' | 'warn' | 'error',
	message: string,
	messageStyles: string,
	args: Args,
) {
	let finalLog = [] as unknown[];
	if (Array.isArray(args[0])) {
		const [messages, styles] = args.reduce<[string[], string[]]>(
			(accumulator, messageTuple) => {
				if (Array.isArray(messageTuple)) {
					accumulator[0].push(`%c${messageTuple[0]}`);
					accumulator[1].push(messageTuple[1]);
				}
				return accumulator;
			},
			[[], []],
		);
		finalLog = [
			`%c${message}${messages.join('')}`,
			`${commonStyles}${messageStyles} margin-right: 4px; `,
			...styles,
		];
	} else {
		finalLog = [`%c${message}`, `${commonStyles}${messageStyles}`, args.join('\n')];
	}
	console[type](...finalLog);
}

export const log: Log = {
	info: (message, ...args) => prepareLog('log', message, infoStyle, args),
	success: (message, ...args) => prepareLog('log', message, successStyle, args),
	warn: (message, ...args) => prepareLog('warn', message, warnStyle, args),
	error: (message, ...args) => prepareLog('error', message, errorStyle, args),
};
