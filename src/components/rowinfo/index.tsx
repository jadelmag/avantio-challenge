import { RowInfoProps } from "./rowinfo.interface";

const RowInfo: React.FC<RowInfoProps> = ({ title, text }) => {
	return (
		<div className="flex flex-row text-center items-center mx-4">
			<h6 className="mr-4 text-md font-semibold text-black">{title}</h6>
			<p className="text-sm text-justify text-gray-600">{text}</p>
		</div>
	);
};

export default RowInfo;
