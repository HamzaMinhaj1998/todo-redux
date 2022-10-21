import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type state = {
  title: string[];
  deleted: boolean[];
};

const initialState: state = {
  title: [],
  deleted: [false],
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
      action: PayloadAction<boolean>
    ) => {
      state.deleted = [...state.deleted, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTodoDetails, setTodoDeleted } = todoSlice.actions;

export const { reducer: todoReducer } = todoSlice;
