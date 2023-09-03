import * as yup from "yup";
import { regexEmail, regexOnlyDigits } from "./regex";

export const ownerDataSchema = yup.object().shape({
	name: yup
		.string()
		.required("Name is required")
		.min(4, "Name must be at least 4 characters")
		.max(64, "Name must not exceed 64 characters"),
	email: yup
		.string()
		.email("Must be a valid email")
		.matches(regexEmail, "Must be a valid email")
		.required("Email is required"),
	phoneNumber: yup
		.string()
		.matches(regexOnlyDigits, "Phone number must be a maximum of 9 digits")
		.nullable(),
});
