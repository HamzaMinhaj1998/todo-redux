import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type state = {
  title: string[];
};

const initialState: state = {
  title: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoDetails: (
      state: typeof initialState,
      action: PayloadAction<string>
    ) => {
      state.title = [...state.title, action.payload];
    },
    setTodoDeleted: (
      state: typeof initialState,
      action: PayloadAction<string>
    ) => {
      state.title = state.title.filter((itm) => itm !== action.payload);
    },
    setTodoUpdate: (
      state: typeof initialState,
      action: PayloadAction<string>
    ) => {
      state.title = state.title.map((todo) => {
        if (todo === action.payload) {
          return action.payload;
        }
        return todo;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTodoDetails, setTodoDeleted, setTodoUpdate } =
  todoSlice.actions;

export const { reducer: todoReducer } = todoSlice;
