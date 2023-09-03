export const regexNameWithNoNumbers: RegExp = /^[A-Za-z\s]+$/;

export const regexEmail: RegExp = new RegExp(
	"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
);

export const regexOnlyDigits: RegExp = /^\d{0,9}$/;
