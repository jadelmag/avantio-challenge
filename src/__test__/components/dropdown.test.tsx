import "@testing-library/jest-dom";
import { RenderResult, render, screen } from "@testing-library/react";
import Dropdown from "../../components/dropdown";
import { DropDownProps } from "../../components/dropdown/dropdown.interface";
import { types } from "../../mockdata/accomodation.mock";

describe("Unit Test Dropdown", () => {
	const dropdownMock: DropDownProps = {
		name: "type",
		selectedOption: types[0].value,
		options: types,
		onChange: () => null,
	};

	let component: RenderResult<
		typeof import("@testing-library/dom/types/queries"),
		HTMLElement,
		HTMLElement
	>;
	beforeEach(() => {
		component = render(
			<Dropdown
				name={dropdownMock.name}
				selectedOption={dropdownMock.selectedOption}
				options={dropdownMock.options}
				onChange={dropdownMock.onChange}
			/>,
		);
	});

	afterEach(() => {
		component.unmount();
	});

	test("render component without crashing", () => {
		const dropdown = screen.getByText(/Type/i);
		expect(dropdown).toBeInTheDocument();
	});

	test("render component with label crashing", () => {
		const dropdown = screen.getByLabelText("label");
		expect(dropdown.innerHTML).toBe("Type");
	});

	test("render component with value options", () => {
		const villa = screen.getByText(/Villa/i);
		const house = screen.getByText(/House/i);
		const apartment = screen.getByText(/Apartment/i);
		expect(villa).toBeInTheDocument();
		expect(house).toBeInTheDocument();
		expect(apartment).toBeInTheDocument();
	});
});
