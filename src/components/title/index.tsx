import { FC } from "react";
import { TitleProps } from "./title.interface";

const Title: FC<TitleProps> = ({ text }) => {
	return <h1 className="flex justify-center text-2xl font-bold">{text}</h1>;
};

export default Title;
