import "@testing-library/jest-dom";
import { RenderResult } from "@testing-library/react";
import Button from ".";
import { ButtonProps } from "./button.interface";

describe("Unit Test Button", () => {
	const mockButton: ButtonProps = {
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
		<Button
			text={mockButton.text}
			type={mockButton.type}
			disabled={mockButton.disabled}
			onClick={mockButton.onClick}
		/>;
	});
});
