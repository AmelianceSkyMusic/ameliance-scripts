export function kebabToCamelCase(str: string) {
	return str.replace(/-./g, (match) => match[1].toUpperCase());
}
