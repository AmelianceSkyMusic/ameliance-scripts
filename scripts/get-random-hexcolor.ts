import { getRandomNumber } from './get-random-number';

export function getRandomHEXColor(): string {
	const r = getRandomNumber(0, 255).toString(16);
	const g = getRandomNumber(0, 255).toString(16);
	const b = getRandomNumber(0, 255).toString(16);
	return `#${r}${g}${b}`;
}
