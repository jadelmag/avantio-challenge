export interface ButtonProps {
	text: string;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
