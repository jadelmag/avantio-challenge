import "@testing-library/jest-dom";
import { RenderResult, render, screen } from "@testing-library/react";
import Title from ".";
import { TitleProps } from "./title.interface";

describe("Unit Test Title", () => {
	const mockTitle: TitleProps = {
		text: "Example",
	};

	let component: RenderResult<
		typeof import("@testing-library/dom/types/queries"),
		HTMLElement,
		HTMLElement
	>;
	beforeEach(() => {
		component = render(<Title text={mockTitle.text} />);
	});

	afterEach(() => {
		component.unmount();
	});

	test("render component without crashing", () => {
		const title = screen.getByText(mockTitle.text);
		expect(title).toBeInTheDocument();
	});

	test("render with title", () => {
		const title = screen.getByRole("heading", { level: 1, name: "Example" });
		expect(title.innerHTML).toBe(mockTitle.text);
	});
});
