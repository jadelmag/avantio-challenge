import * as yup from "yup";
import { regexNameWithNoNumbers } from "./regex";

export const accommodationSchema = yup.object().shape({
	name: yup
		.string()
		.required("Name is required")
		.matches(regexNameWithNoNumbers, "Name must not contain numbers")
		.min(4, "Name must be at least 4 characters")
		.max(128, "Name must be at most 128 characters"),
	address: yup
		.string()
		.required("Address is required")
		.min(4, "Address must be at least 4 characters")
		.max(128, "Address must be at most 128 characters"),
	description: yup
		.string()
		.nullable()
		.optional()
		.max(2048, "Description must be at most 2048 characters"),
});
