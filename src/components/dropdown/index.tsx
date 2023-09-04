import { FC } from "react";
import { DropDownProps, Option } from "./dropdown.interface";

const Dropdown: FC<DropDownProps> = ({
	name,
	selectedOption,
	options,
	onChange: updateSelected,
}) => {
	return (
		<div className="flex flex-col justify-center mt-8 mx-4">
			<label
				htmlFor={name}
				aria-label="label"
				className="block mb-2 text-sm font-medium text-gray-900"
			>
				Type
			</label>
			<select
				name={name}
				aria-label={name}
				className="w-50 md:w-full h-10 p-2 border rounded resize-none focus:border-blue-300 focus:outline-none"
				onChange={updateSelected}
				value={selectedOption}
			>
				{options.map((option: Option, index: number) => (
					<option key={`${index}-${option.name}`} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
