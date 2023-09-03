export interface TextareaProps {
	name: string;
	value: string;
	title?: string;
	placeholder?: string;
	msgError?: string;
	onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void;
	onBlur: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}
