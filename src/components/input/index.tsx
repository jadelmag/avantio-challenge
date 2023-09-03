import { ChangeEvent, FC } from "react";
import { InputProps } from "./input.interface";

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
						<span className="block mb-2 text-sm font-medium text-red-400">
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

interface DefaultInputProps {
	id: string;
	name: string;
	type: string;
	value: string;
	placeholder?: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

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
			placeholder={placeholder}
			className="w-50 md:w-full p-2 border rounded resize-none focus:border-blue-300 focus:outline-none"
			onChange={handleChange}
			onBlur={handleBlur}
		/>
	);
};

interface InputFileProps {
	id: string;
	multiple?: boolean;
	handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputFile: FC<InputFileProps> = ({ id, multiple, handleFileChange }) => {
	return (
		<input
			id={id}
			type="file"
			multiple={multiple}
			className="focus:outline-none focus:border-blue-500"
			onChange={handleFileChange}
		/>
	);
};

export default Input;
