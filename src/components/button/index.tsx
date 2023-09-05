import React from "react";
import { ButtonProps } from "./button.interface";

const Button: React.FC<ButtonProps> = ({
	text,
	type = "button",
	disabled = false,
	onClick,
}) => {
	return (
		<div className="flex flex-col justify-center mt-8 mx-4">
			<button
				id="button"
				type={type}
				onClick={onClick}
				className="w-50 md:w-full h-14 p-2 border rounded resize-none focus:outline-none text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-600 disabled:bg-gray-300"
				disabled={disabled}
			>
				{text}
			</button>
		</div>
	);
};

export default Button;
