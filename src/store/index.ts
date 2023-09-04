import { configureStore } from "@reduxjs/toolkit";
import accommodationReducer from "./accommodation";
import ownerReducer from "./owner";

export const store = configureStore({
	reducer: {
		accommodation: accommodationReducer,
		owner: ownerReducer,
	},
});
