type ArrItem = string | number;

export function getDifferentValues(...arrays: ArrItem[][]): ArrItem[] {
	return arrays.reduce((firstArray, secondArray) => firstArray
		.filter((element) => !secondArray.includes(element)));
}
