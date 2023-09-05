import "@testing-library/jest-dom";
import ownerSlice, { OwnerState, setOwnerData } from "../../store/owner";

describe("Unit Test ownerSlice", () => {
	let initialState: OwnerState;
	beforeEach(() => {
		initialState = {
			name: "",
			email: "",
			phone: "",
		};
	});

	test("setOwnerData", () => {
		const currentState = {
			name: "Carlos Martinez",
			email: "email@example.com",
			phone: "625412365",
		};

		const afterReducerOperation = ownerSlice(
			initialState,
			setOwnerData(currentState),
		);
		expect(afterReducerOperation.name).toBe(currentState.name);
		expect(afterReducerOperation.email).toBe(currentState.email);
		expect(afterReducerOperation.phone).toBe(currentState.phone);
	});
});
