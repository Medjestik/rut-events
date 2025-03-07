export const convertDate = (date: Date | string): string => {
	const d = typeof date === 'string' ? new Date(date) : date;
	const day = d.getDate().toString().padStart(2, '0');
	const month = (d.getMonth() + 1).toString().padStart(2, '0');
	return `${day}.${month}`;
};
