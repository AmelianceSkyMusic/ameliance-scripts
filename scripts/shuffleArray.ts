import { getRandomNumber } from './getRandomNumber';

export function shuffleArray<TYPE>(array: TYPE[]): TYPE[] {
	const arrayCopy = array.slice();
	for (let i = 0; i < array.length; i++) {
		const j = getRandomNumber(0, array.length - 1);
		[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
	}
	return arrayCopy;
}
