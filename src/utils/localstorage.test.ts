import "@testing-library/jest-dom";
import { loadDataFromLocalStorage, saveOnLocalStorage } from "./localstorage";

describe("Unit Test Functions", () => {
	test("save on local storage", () => {
		const obj = {
			name: "Javier",
			lastname: "Delgado",
		};

		expect(saveOnLocalStorage(obj, "test")).toBeFalsy();
	});

	test("load data from local storage", () => {
		const storage = loadDataFromLocalStorage("test");
		expect(storage).toEqual({ name: "Javier", lastname: "Delgado" });
	});
});
