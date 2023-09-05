import "@testing-library/jest-dom";
import accommodationSlice, {
	AccommodationState,
	setAccommodationData,
} from "../../store/accommodation";

describe("Unit Test accommodationSlice", () => {
	let initialState: AccommodationState;
	beforeEach(() => {
		initialState = {
			name: "",
			address: "",
			description: "",
			type: "",
			images: [],
		};
	});

	test("setAccommodationData", () => {
		const currentState = {
			name: "Javier Delgado",
			address: "Archiduque Carlos",
			description: "Piso de 120 metros cuadrados",
			type: "apartment",
			images: [],
		};

		const afterReducerOperation = accommodationSlice(
			initialState,
			setAccommodationData(currentState),
		);
		expect(afterReducerOperation.name).toBe(currentState.name);
		expect(afterReducerOperation.address).toBe(currentState.address);
		expect(afterReducerOperation.description).toBe(currentState.description);
		expect(afterReducerOperation.type).toBe(currentState.type);
		expect(afterReducerOperation.images.length).toBe(
			currentState.images.length,
		);
	});
});
