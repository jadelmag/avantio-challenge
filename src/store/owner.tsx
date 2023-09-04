import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface OwnerState {
	name: string;
	email: string;
	phone: string;
}

const initialState: OwnerState = {
	name: "",
	email: "",
	phone: "",
};

export const ownerSlice = createSlice({
	name: "owner",
	initialState,
	reducers: {
		setOwnerData: (state, action: PayloadAction<OwnerState>) => {
			const { name, email, phone } = action.payload;
			state.name = name;
			state.email = email;
			state.phone = phone;
		},
	},
});

export const { setOwnerData } = ownerSlice.actions;

export default ownerSlice.reducer;
