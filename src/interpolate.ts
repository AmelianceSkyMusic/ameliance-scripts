import { escapeHtml } from './escape-html';

type Primitive = string | number | boolean;

type InterpolationValues = {
	[key: string]: Primitive | InterpolationValues;
};

const templateRegexp = /{{([\w.]+)(?:\|([^}]*))?}}/g;

function createValueGetter(obj: InterpolationValues) {
	const cache = new Map<string, unknown>();

	return function getValueByPath(path: string): unknown {
		if (cache.has(path)) return cache.get(path);

		let value: unknown;

		if (!path.includes('.')) {
			value = obj[path];
		} else {
			const keys = path.split('.');
			value = obj;
			for (const key of keys) {
				if (typeof value === 'object' && value !== null && key in value) {
					value = (value as Record<string, unknown>)[key];
				} else {
					value = undefined;
					break;
				}
			}
		}

		cache.set(path, value);
		return value;
	};
}

export function interpolate(
	template: string,
	values: InterpolationValues,
	options: { throwIfMissing?: boolean; escapeValues?: boolean } = {
		throwIfMissing: true,
		escapeValues: true,
	},
): string {
	const getValue = createValueGetter(values);

	return template.replace(templateRegexp, (match, path, defaultValue) => {
		const value = getValue(path);
		let result: string;

		if (value !== undefined && value !== null) {
			result = String(value);
		} else if (defaultValue !== undefined) {
			result = defaultValue;
		} else if (options.throwIfMissing) {
			throw new Error(`Missing value for interpolation key: "${path}"`);
		} else {
			return match;
		}

		return options.escapeValues ? escapeHtml(result) : result;
	});
}
