import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AccommodationState {
	name: string;
	address: string;
	description: string;
	type: string;
	images: string[];
}

const initialState: AccommodationState = {
	name: "",
	address: "",
	description: "",
	type: "",
	images: [],
};

export const accommodationSlice = createSlice({
	name: "accomodationForm",
	initialState,
	reducers: {
		setAccommodationData: (
			state,
			action: PayloadAction<AccommodationState>,
		) => {
			const { name, address, description, type, images } = action.payload;
			state.name = name;
			state.address = address;
			state.description = description;
			state.type = type;
			state.images = images;
		},
	},
});

export const { setAccommodationData } = accommodationSlice.actions;

export default accommodationSlice.reducer;
