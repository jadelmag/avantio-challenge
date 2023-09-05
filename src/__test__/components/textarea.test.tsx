import "@testing-library/jest-dom";
import { RenderResult, render, screen } from "@testing-library/react";
import Textarea from "../../components/textarea";
import { TextareaProps } from "../../components/textarea/textarea.interface";

describe("Unit Test Textarea", () => {
	const textareaMock: TextareaProps = {
		name: "description",
		value: "",
		title: "Description",
		placeholder: "",
		msgError: "",
		onChange: () => null,
		onBlur: () => null,
	};

	let component: RenderResult<
		typeof import("@testing-library/dom/types/queries"),
		HTMLElement,
		HTMLElement
	>;
	beforeEach(() => {
		component = render(
			<Textarea
				name={textareaMock.name}
				value={textareaMock.value}
				title={textareaMock.title}
				placeholder={textareaMock.placeholder}
				msgError={textareaMock.msgError}
				onChange={textareaMock.onChange}
				onBlur={textareaMock.onBlur}
			/>,
		);
	});

	afterEach(() => {
		component.unmount();
	});

	test("render component without crashing", () => {
		const textarea = screen.getByLabelText("label");
		expect(textarea).toBeInTheDocument();
	});

	test("render with title", () => {
		const textarea = screen.getByText("Description");
		expect(textarea).toBeInTheDocument();
		expect(textarea.innerHTML).toBe(textareaMock.title);
	});

	test("render get name", () => {
		const textarea = screen.getByLabelText("label");
		const htmlFor = textarea.getAttribute("for");
		expect(htmlFor).toEqual(textareaMock.name);
	});

	test("render show message error", () => {
		component.unmount();
		render(
			<Textarea
				name={textareaMock.name}
				value={textareaMock.value}
				title={textareaMock.title}
				placeholder={textareaMock.placeholder}
				msgError={"Description must be at most 2048 characters"}
				onChange={textareaMock.onChange}
				onBlur={textareaMock.onBlur}
			/>,
		);
		const span = screen.getByLabelText("span");
		expect(span).toBeInTheDocument();
		expect(span.innerHTML).toBe("Description must be at most 2048 characters");
	});
});
