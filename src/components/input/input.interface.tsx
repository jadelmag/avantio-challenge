import { ChangeEvent } from "react";

export interface InputProps {
	id: string;
	name?: string;
	type: InputType;
	value?: string | number | boolean;
	placeholder?: string;
	multiple?: boolean;
	elementType: ElementType;
	title: string;
	error?: boolean;
	msgError?: string | undefined;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onBlur: (
		event: React.FocusEvent<HTMLInputElement, Element>,
	) => void | undefined;
}

type InputType =
	| "text"
	| "number"
	| "password"
	| "email"
	| "date"
	| "color"
	| "tel"
	| "url"
	| "file";

type ElementType = "default" | "file";

export interface OptionType {
	value: string;
	label: string;
}
