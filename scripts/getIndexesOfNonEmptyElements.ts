type ArrItem = string | number;

export function getIndexesOfNonEmptyElements(array: ArrItem[]): ArrItem[] {
	return array.map((value, i) => (value !== '' ? i : '')).filter(String);
}
