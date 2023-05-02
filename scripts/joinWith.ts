export function joinWith(combiner: string, ...args: unknown[]): string {
	return args
		.flat(Infinity)
		.filter((element) => element)
		.map((element: unknown) => String(element).trim())
		.join(combiner);
}
