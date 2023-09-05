import { useMemo } from "react";
import { useSelector } from "react-redux";
import Button from "../components/button";
import ImageFile from "../components/imagefile";
import RowInfo from "../components/rowinfo";
import Title from "../components/title";
import { RootState } from "../store";
import { ItemArrayProp, objectToArray } from "../utils/functions";

const regEx = /images/i;

const SummaryPage = () => {
	const accommodation = useSelector((state: RootState) => state.accommodation);
	const owner = useSelector((state: RootState) => state.owner);

	const accommodationArray = useMemo(() => {
		return objectToArray(accommodation);
	}, [accommodation]);

	const ownerArray = useMemo(() => {
		return objectToArray(owner);
	}, [owner]);

	const onSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const customEvent = new CustomEvent("form", {
			detail: { accommodation, owner },
		});
		window.dispatchEvent(customEvent);
	};

	return (
		<div className="flex flex-col gap-2">
			<Title text="Accommodation" />
			{accommodationArray.map((item: ItemArrayProp, index: number) => {
				if (item.key.match(regEx)) return null;
				return (
					<RowInfo
						key={`${index}-${item.value}`}
						id={item.id}
						title={item.key}
						text={item.value}
					/>
				);
			})}
			<ImageFile images={accommodation.images} />

			<Title text="Owner" />
			{ownerArray.map((item, index: number) => {
				return (
					<RowInfo
						key={`${index}-${item.value}`}
						id={item.id}
						title={item.key}
						text={item.value}
					/>
				);
			})}

			<Button type="submit" text="Submit" onClick={onSubmit} />
		</div>
	);
};

export default SummaryPage;
