import "@testing-library/jest-dom";
import { RenderResult, render } from "@testing-library/react";
import Dropdown from ".";
import { types } from "../../mockdata/accomodation.mock";
import { DropDownProps } from "./dropdown.interface";

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

	test("render component", () => {});

	test("render component with image", () => {});

	test("render component with text", () => {});

	test("render component with author", () => {});
});
