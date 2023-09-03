import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Dropdown from "../components/dropdown";
import ImageFile from "../components/imagefile";
import Input from "../components/input";
import Textarea from "../components/textarea";
import { types } from "../mockdata/accomodation.mock";
import { setAccommodationData } from "../store/accommodation";
import {
	loadDataFromLocalStorage,
	saveOnLocalStorage,
} from "../utils/localstorage";
import { accommodationSchema } from "../validations/accommodationSchema";
import { MAX_HEIGHT, MAX_WIDTH } from "../validations/dimenstions";

const AccommodationPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [type, setType] = useState<string>(types[0].value);
	const [images, setImages] = useState<string[]>([]);

	const {
		isValid,
		values,
		errors,
		touched,
		setValues,
		handleChange,
		handleSubmit,
		handleBlur,
	} = useFormik({
		initialValues: {
			name: "",
			address: "",
			description: "",
			type: type,
		},
		validationSchema: accommodationSchema,
		onSubmit: () => {
			const data = { ...values, images };
			saveOnLocalStorage(data, "accommodation");
			dispatch(setAccommodationData(data));
			navigate("/owner");
		},
	});

	const updateSelected = (
		event: React.ChangeEvent<HTMLSelectElement>,
	): void => {
		const value = event.target.value;
		setType(value);
	};

	const updateFiles = (event: React.ChangeEvent<HTMLInputElement>): void => {
		event.preventDefault();
		const files: FileList | null = event.target.files;
		if (!files) return;
		if (files?.length > 2) {
			alert("You can only select two images!");
		} else {
			for (let i = 0; i < files.length; i++) {
				const img = new window.Image() as HTMLImageElement;
				const url: string = URL.createObjectURL(files[i]);
				img.onload = () => {
					if (img.width > MAX_WIDTH || img.height > MAX_HEIGHT) {
						alert("Dimension restrictions of 500x500");
					} else {
						const currentImages = [...images, url];
						setImages(currentImages);
					}
				};
				img.src = url;
			}
		}
	};

	useEffect(() => {
		const data = loadDataFromLocalStorage("accommodation");
		const loadedData = {
			name: data.name || "",
			address: data.address || "",
			description: data.description || "",
			type: data.type || types[0].value,
		};
		const type: string = data.type || types[0].value;
		const images: string[] = data.images || [];
		const values = { ...loadedData, images };
		setValues(loadedData);
		setType(type);
		setImages(images);
		dispatch(setAccommodationData(values));
	}, []);

	return (
		<>
			<h1 className="flex justify-center text-2xl font-bold">Accomodation</h1>
			<Input
				id="name"
				name="name"
				type="text"
				value={values.name}
				elementType="default"
				title="Name"
				error={(touched.name && errors.name) as boolean}
				msgError={errors.name as string}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				id="address"
				name="address"
				type="text"
				value={values.address}
				elementType="default"
				title="Address"
				error={(touched.address && errors.address) as boolean}
				msgError={errors.address as string}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Textarea
				name="description"
				title="Description"
				value={values.description}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Dropdown
				name="type"
				selectedOption={type}
				options={types}
				onChange={updateSelected}
			/>
			<Input
				id="images"
				title="Optional: Max Images 2"
				type="file"
				elementType="file"
				multiple
				onChange={updateFiles}
				onBlur={() => {}}
			/>
			{images.length > 0 && <ImageFile images={images} />}
			<Button
				disabled={!isValid}
				type="submit"
				text="Next"
				onClick={() => handleSubmit()}
			/>
		</>
	);
};

export default AccommodationPage;
