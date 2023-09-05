export interface ItemArrayProp {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	value: any;
	id: string;
	key: string;
}

// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export const objectToArray = (obj: any): ItemArrayProp[] => {
	const resultArray = [];
	for (const key in obj) {
		// rome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
		if (obj.hasOwnProperty(key)) {
			resultArray.push({
				key: `${capitalizeFirstLetter(key)}:`,
				value: obj[key],
				id: key,
			});
		}
	}

	return resultArray;
};

export const capitalizeFirstLetter = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};
