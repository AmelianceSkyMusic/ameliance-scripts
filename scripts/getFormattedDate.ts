export function getFormattedDate(
	dateString: string,
	dateStyle: Intl.DateTimeFormatOptions['dateStyle'] = 'long',
	format = 'en-US',
): string {
	return new Intl.DateTimeFormat(format, { dateStyle }).format(new Date(dateString));
}
