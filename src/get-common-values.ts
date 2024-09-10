type ArrItem = string | number;

export function getCommonValues(...arrays: ArrItem[][]): ArrItem[] {
	return arrays.reduce((firstArray, secondArray) =>
		firstArray.filter((element) => secondArray.includes(element)),
	);
}
