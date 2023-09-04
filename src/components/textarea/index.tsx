import { FC } from "react";
import { TextareaProps } from "./textarea.interface";

const Textarea: FC<TextareaProps> = ({
	name,
	title = "",
	placeholder = "",
	value,
	msgError = "",
	onChange,
	onBlur,
}) => {
	return (
		<div className="flex flex-col justify-center mt-8 mx-4">
			<label
				aria-label="label"
				htmlFor={name}
				className="block mb-2 text-sm font-medium text-gray-900"
			>
				{title}
			</label>
			<textarea
				aria-label="textarea"
				className="w-50 md:w-full h-24 p-2 border rounded resize-none focus:border-blue-300 focus:outline-none"
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			{msgError.length > 0 && (
				<span
					aria-label="span"
					className="block mb-2 text-sm font-medium text-red-400"
				>
					{msgError}
				</span>
			)}
		</div>
	);
};

export default Textarea;
