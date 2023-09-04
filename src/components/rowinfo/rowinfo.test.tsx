import "@testing-library/jest-dom";
import { RenderResult, render, screen } from "@testing-library/react";
import RowInfo from ".";
import { RowInfoProps } from "./rowinfo.interface";

describe("Unit Test RowInfo", () => {
	const mockRowInput: RowInfoProps = {
		title: "Title Example",
		text: "Text Example",
	};

	let component: RenderResult<
		typeof import("@testing-library/dom/types/queries"),
		HTMLElement,
		HTMLElement
	>;
	beforeEach(() => {
		component = render(
			<RowInfo title={mockRowInput.title} text={mockRowInput.text} />,
		);
	});

	afterEach(() => {
		component.unmount();
	});

	test("render component without crashing", () => {
		const title = screen.getByText(/Title Example/i);
		expect(title).toBeInTheDocument();
	});

	test("render both properties", () => {
		const title = screen.getByText(/Title Example/i);
		expect(title.innerHTML).toBe(mockRowInput.title);
		const text = screen.getByText(/Text Example/i);
		expect(text.innerHTML).toBe(mockRowInput.text);
	});
});
