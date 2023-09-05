import "@testing-library/jest-dom";
import { RenderResult, render, screen } from "@testing-library/react";
import Button from "../../components/button";
import { ButtonProps } from "../../components/button/button.interface";

describe("Unit Test Button", () => {
	const buttonMock: ButtonProps = {
		text: "Next",
		type: "button",
		disabled: false,
		onClick: () => null,
	};

	let component: RenderResult<
		typeof import("@testing-library/dom/types/queries"),
		HTMLElement,
		HTMLElement
	>;
	beforeEach(() => {
		component = render(
			<Button
				text={buttonMock.text}
				type={buttonMock.type}
				disabled={buttonMock.disabled}
				onClick={buttonMock.onClick}
			/>,
		);
	});

	afterEach(() => {
		component.unmount();
	});

	test("render component without crashing", () => {
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
	});

	test("render component button with text", () => {
		const button = screen.getByRole("button", { name: /Next/i });
		expect(button).toBeInTheDocument();
	});

	test("render component button is not disabled", () => {
		const button = screen.getByRole("button");
		expect(button).not.toBeDisabled();
	});

	test("render component button is disabled", () => {
		component.unmount();
		render(
			<Button
				text={buttonMock.text}
				type={buttonMock.type}
				disabled={true}
				onClick={buttonMock.onClick}
			/>,
		);
		const button = screen.getByRole("button");
		expect(button).toBeDisabled();
	});

	test("render component with type button", () => {
		const button = screen.getByRole("button");
		const type = button.getAttribute("type");
		expect(type).toEqual(buttonMock.type);
	});
});
