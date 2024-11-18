export const getChangedProperties = <T extends object>(
	originalObject: Partial<T>,
	updatedObject: Partial<T>,
) => {
	return Object.fromEntries(
		Object.entries(updatedObject).filter(([key, value]) => {
			const originalValue = originalObject[key as keyof T];

			if (value instanceof Date && originalValue instanceof Date) {
				return value.getTime() !== originalValue.getTime();
			}

			return value !== originalValue;
		}),
	) as Partial<T>;
};
