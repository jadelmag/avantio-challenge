import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./accommodation";

export const store = configureStore({
	reducer: {
		accommodation: userReducer,
	},
});
