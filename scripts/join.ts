export function join(...args: unknown[]): string {
	return args.flat(Infinity).filter((element) => element).join(' ').trim();
}
