export function createHTMLElem(
	parent: HTMLElement | DocumentFragment,
	elementType: string,
	params?: {
		class?: string;
		id?: string;
		attributes?: string[];
	},
	text = '',
): HTMLElement {
	const element$ = document.createElement(elementType);
	if (params?.class) {
		const classes: string[] = params.class.split(' ');
		element$.classList.add(...classes);
	}
	if (params?.id) {
		element$.setAttribute('id', params.id);
	}
	if (params?.attributes) {
		params.attributes.forEach((attribute) => {
			const attributeName = attribute.split('=')[0];
			const attributeValue = (attribute.split('=')[1] || '').replaceAll('"', '');

			element$.setAttribute(attributeName, attributeValue);
		});
	}
	if (text) {
		element$.innerHTML = text;
	}
	parent.append(element$);

	return element$;
}
