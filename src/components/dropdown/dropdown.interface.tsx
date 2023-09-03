export interface DropDownProps {
	name: string;
	selectedOption: string;
	options: Option[];
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface Option {
	value: string;
	name: string;
}
