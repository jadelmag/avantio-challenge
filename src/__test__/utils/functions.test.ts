import "@testing-library/jest-dom";
import { capitalizeFirstLetter, objectToArray } from "../../utils/functions";

describe("Unit Test Functions", () => {
	test("object to array function", () => {
		const obj = {
			name: "Javier",
			lastname: "Delgado",
		};

		const newArray = objectToArray(obj);
		expect(typeof newArray).toBe("object");
	});

	test("capitalize first letter function", () => {
		const word = "example";
		const capitalized = capitalizeFirstLetter(word);
		expect(capitalized).toBe("Example");
	});
});
