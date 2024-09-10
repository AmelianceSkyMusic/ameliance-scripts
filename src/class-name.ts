interface ClassNameReturn {
	className: string;
}

export function className(...args: unknown[]): ClassNameReturn {
	return {
		className: args
			.flat(Infinity)
			.filter((element) => element)
			.join(' ')
			.trim(),
	};
}
