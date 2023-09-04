import "@testing-library/jest-dom";
import { RenderResult, render, screen } from "@testing-library/react";
import Input from ".";
import { InputProps } from "./input.interface";

describe("Unit Test Dropdown", () => {
	const mockInput: InputProps = {
		id: "address",
		name: "address",
		type: "text",
		value: "",
		placeholder: "",
		multiple: false,
		elementType: "default",
		title: "Address",
		error: false,
		msgError: "",
		onChange: () => null,
		onBlur: () => {},
	};

	let component: RenderResult<
		typeof import("@testing-library/dom/types/queries"),
		HTMLElement,
		HTMLElement
	>;
	beforeEach(() => {
		component = render(
			<Input
				id={mockInput.id}
				name={mockInput.name}
				type={mockInput.type}
				value={mockInput.value}
				placeholder={mockInput.placeholder}
				multiple={mockInput.multiple}
				elementType={mockInput.elementType}
				title={mockInput.title}
				error={mockInput.error}
				msgError={mockInput.msgError}
				onChange={mockInput.onChange}
				onBlur={mockInput.onBlur}
			/>,
		);
	});

	afterEach(() => {
		component.unmount();
	});

	test("render component without crashing", () => {
		const input = screen.getByText(mockInput.title);
		expect(input).toBeInTheDocument();
	});

	test("render label with values", () => {
		const label = screen.getByLabelText("title");
		expect(label).toBeInTheDocument();
		const htmlFor = label.getAttribute("for");
		expect(htmlFor).toBe(mockInput.id);
		const title = screen.getByText(mockInput.title);
		expect(title).toBeInTheDocument();
		expect(title.innerHTML).toBe(mockInput.title);
	});

	test("render default input with values", () => {
		const input = screen.getByLabelText("input");
		const id = input.getAttribute("id");
		const placeholder = input.getAttribute("placeholder");
		const type = input.getAttribute("type");
		expect(id).toBe(mockInput.id);
		expect(placeholder).toBe(mockInput.placeholder);
		expect(type).toBe(mockInput.type);
	});

	test("render input file with values", () => {
		component.unmount();
		render(
			<Input
				id="images"
				title="Optional: Max Images 2"
				type="file"
				elementType="file"
				multiple
				onChange={() => null}
				onBlur={() => {}}
			/>,
		);
		const label = screen.getByLabelText("title");
		expect(label.innerHTML).toBe("Optional: Max Images 2");
		const htmlFor = label.getAttribute("for");
		expect(htmlFor).toBe("images");

		const input = screen.getByLabelText("input-file");
		const id = input.getAttribute("id");
		const type = input.getAttribute("type");
		expect(id).toBe("images");
		expect(type).toBe("file");
	});
});
