import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

type TodoItem = {
  id: string;
  text: string;
};

type TodoState = {
  items: TodoItem[];
};

const initialState: TodoState = {
  items: [
    { id: nanoid(), text: "Review project structure" },
    { id: nanoid(), text: "Add Redux store" },
    { id: nanoid(), text: "Open todo list from main screen" },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<TodoItem>) => {
        state.items.unshift(action.payload);
      },
      prepare: (text: string) => ({
        payload: {
          id: nanoid(),
          text,
        },
      }),
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const selectTodos = (state: { todo: TodoState }) => state.todo.items;

export default todoSlice.reducer;
