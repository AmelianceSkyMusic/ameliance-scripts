type HideType = 'left' | 'right' | 'middle';

export function hideEmail(email: string, hideType: HideType = 'middle'): string | null {
	if (email.length < 0) return null;
	const [username, domain] = email.split('@');
	const firstLetter = hideType === 'left' ? '*' : username.charAt(0);
	const lastLetter = hideType === 'right' ? '*' : username.charAt(username.length - 1);
	const hiddenLetters = '*'.repeat(username.length - 2);
	const formattedEmail = `${firstLetter}${hiddenLetters}${lastLetter}@${domain}`;
	return formattedEmail;
}
