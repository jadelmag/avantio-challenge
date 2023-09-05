import "@testing-library/jest-dom";
import { RenderResult, render, screen } from "@testing-library/react";
import RowInfo from "../../components/rowinfo";
import { RowInfoProps } from "../../components/rowinfo/rowinfo.interface";

describe("Unit Test RowInfo", () => {
	const mockRowInput: RowInfoProps = {
		id: "id_example",
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
			<RowInfo
				id={mockRowInput.id}
				title={mockRowInput.title}
				text={mockRowInput.text}
			/>,
		);
	});

	afterEach(() => {
		component.unmount();
	});

	test("render component without crashing", () => {
		const title = screen.getByText(/Title Example/i);
		expect(title).toBeInTheDocument();
	});

	test("render get properties", () => {
		const id = screen.getByText(/id_example/i);
		expect(id.innerHTML).toBe(mockRowInput.id);
		const title = screen.getByText(/Title Example/i);
		expect(title.innerHTML).toBe(mockRowInput.title);
		const text = screen.getByText(/Text Example/i);
		expect(text.innerHTML).toBe(mockRowInput.text);
	});
});
