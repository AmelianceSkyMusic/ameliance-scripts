type SetInterval = {
	callback: () => void;
	delay: number;
	counts: number;
};

export function setIntervalCounts({
	callback,
	delay,
	counts,
}: SetInterval): ReturnType<typeof setInterval> {
	let counter = 0;
	const interval = setInterval(() => {
		callback();
		counter += 1;
		if (counter === counts) {
			clearInterval(interval);
		}
	}, delay);

	return interval;
}
