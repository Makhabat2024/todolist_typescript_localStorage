import { createSlice } from "@reduxjs/toolkit";

interface createSliceType {
	id: number;
	name: string;
	age: number;
	completed: boolean;
}
const initialState: { data: createSliceType[] } = {
	data: [],
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newData = {
				id: Date.now(),
				name: action.payload.name,
				age: action.payload.age,
				completed: false,
			};
			state.data.push(newData);
			localStorage.setItem("todo", JSON.stringify(state.data));
		},
		removeTodo: (state, action) => {
			state.data = state.data.filter((item) => item.id !== action.payload.id);
			localStorage.setItem("todo", JSON.stringify(state.data));
		},
		completedTodo: (state, action) => {
			state.data = state.data.map((item) =>
				item.id === action.payload.id
					? { ...item, completed: !item.completed }
					: item
			);
			localStorage.setItem("todo", JSON.stringify(state.data));
		},
	},
});
export const { addTodo, completedTodo, removeTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

const storedTodo = localStorage.getItem("todo");
if (storedTodo) {
	initialState.data = JSON.parse(storedTodo);
}
