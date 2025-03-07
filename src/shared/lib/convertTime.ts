export const convertTime = (startTime: string, endTime: string): string => {
	const formatTime = (time: string) => time.slice(0, 5);

	return `${formatTime(startTime)}-${formatTime(endTime)}`;
};
