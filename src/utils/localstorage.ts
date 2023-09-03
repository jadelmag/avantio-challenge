// rome-ignore lint/suspicious/noExplicitAny: <explanation>
export const saveOnLocalStorage = (data: any, key: string) => {
	localStorage.setItem(key, JSON.stringify(data));
};

export const loadDataFromLocalStorage = (key: string) => {
	try {
		const data: string | null = localStorage.getItem(key);
		if (!data) return {};
		const parsed = JSON.parse(data);
		return parsed;
	} catch (error) {
		console.log(`Not exist a the key ${key} on local storage`);
	}
};
