import { configureStore } from "@reduxjs/toolkit";
import accommodationReducer from "./accommodation";
import ownerReducer from "./owner";

export const store = configureStore({
	reducer: {
		accommodation: accommodationReducer,
		owner: ownerReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
