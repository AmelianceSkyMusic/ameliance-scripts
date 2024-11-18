export function getCurrentTimeWithOffset(millisecondsOffset: number) {
	const currentDate = new Date();
	currentDate.setTime(currentDate.getTime() + millisecondsOffset);

	const formattedTime = currentDate.toLocaleTimeString('en-US', { hour12: false });

	return formattedTime;
}
