import { createSlice } from "@reduxjs/toolkit";

interface counterSliceType {
	value: number;
}

const initialState: counterSliceType = {
	value: 0,
};
const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		handleAdd: (state) => {
			state.value += 1;
		},

		handlleAddAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { handleAdd,handlleAddAmount } = counterSlice.actions;
export const counterReduser = counterSlice.reducer;
