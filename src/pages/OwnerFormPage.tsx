import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";
import Title from "../components/title";
import { setOwnerData } from "../store/owner";
import { saveOnLocalStorage } from "../utils/localstorage";
import { ownerSchema } from "../validations/ownerSchema";

const OwnerFormPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {
		isValid,
		values,
		errors,
		touched,
		handleChange,
		handleSubmit,
		handleBlur,
	} = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
		},
		validationSchema: ownerSchema,
		onSubmit: () => {
			const data = { ...values };
			saveOnLocalStorage(data, "owner");
			dispatch(setOwnerData(data));
			navigate("/summary");
		},
	});

	return (
		<>
			<Title text={"Owner"} />
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
				id="email"
				name="email"
				type="email"
				value={values.email}
				elementType="default"
				title="Email"
				error={(touched.email && errors.email) as boolean}
				msgError={errors.email as string}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Input
				id="phone"
				name="phone"
				type="tel"
				value={values.phone}
				elementType="default"
				title="Phone"
				error={(touched.phone && errors.phone) as boolean}
				msgError={errors.phone as string}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			<Button
				disabled={!isValid}
				type="submit"
				text="Next"
				onClick={() => handleSubmit()}
			/>
		</>
	);
};

export default OwnerFormPage;
