import { FC, useEffect, useState } from "react";
import { ImageFileProps } from "./imagefile.interface";

const ImageFile: FC<ImageFileProps> = ({ images }) => {
	const [imageUrls, setImageUrls] = useState<string[]>([]);

	useEffect(() => {
		setImageUrls(images);
	}, [images]);

	return (
		<div role="listitem" className="flex justify-center gap-5 mt-10 ">
			{imageUrls.map((url: string, index: number) => (
				<div key={`${index}-${url}`} className="w-20 h-20">
					<img
						aria-label="image"
						className=" w-20 h-20"
						src={url}
						alt={`Uploaded ${index}`}
					/>
				</div>
			))}
		</div>
	);
};

export default ImageFile;
