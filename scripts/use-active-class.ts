export function useActiveClass(
	activeClass: string,
	inactiveClass = '',
): (condition: boolean) => string {
	return (condition: boolean) => (condition ? activeClass : inactiveClass);
}
