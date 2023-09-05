import { FC } from "react";
import {
	DefaultInputProps,
	InputFileProps,
	InputProps,
} from "./input.interface";

const Input: FC<InputProps> = ({
	id,
	name = "",
	type,
	value = "",
	placeholder = "",
	multiple = true,
	elementType,
	title,
	error = false,
	msgError = "",
	onChange,
	onBlur,
}) => {
	return (
		<div className="flex flex-col justify-center mt-8 mx-4">
			<label
				aria-label="title"
				htmlFor={id}
				className="block mb-2 text-sm font-medium text-gray-900"
			>
				{title}
			</label>
			{elementType === "default" && (
				<>
					<DefaultInput
						id={id}
						name={name}
						type={type}
						value={value as string}
						placeholder={placeholder}
						handleChange={onChange}
						handleBlur={onBlur}
					/>
					{error && (
						<span
							id={`error-${id}`}
							className="block mb-2 text-sm font-medium text-red-400"
						>
							{msgError}
						</span>
					)}
				</>
			)}

			{elementType === "file" && (
				<InputFile id={id} multiple={multiple} handleFileChange={onChange} />
			)}
		</div>
	);
};

const DefaultInput: FC<DefaultInputProps> = ({
	id,
	name,
	type,
	value,
	placeholder = "",
	handleChange,
	handleBlur,
}) => {
	return (
		<input
			id={id}
			name={name}
			type={type}
			value={value}
			aria-label="input"
			placeholder={placeholder}
			className="w-50 md:w-full p-2 border rounded resize-none focus:border-blue-300 focus:outline-none"
			onChange={handleChange}
			onBlur={handleBlur}
		/>
	);
};

const InputFile: FC<InputFileProps> = ({ id, multiple, handleFileChange }) => {
	return (
		<input
			id={id}
			type="file"
			aria-label="input-file"
			multiple={multiple}
			className="focus:outline-none focus:border-blue-500"
			onChange={handleFileChange}
		/>
	);
};

export default Input;
