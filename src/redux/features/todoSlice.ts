import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState, ITodo } from "../interface/TodoTypes";

const initialState: IInitialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITodo>) => {
      state.tasks.push({ ...action.payload, isCompleted: false });
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
      const incompleteTasks = state.tasks.filter((task) => !task.isCompleted);
      const completeTasks = state.tasks.filter((task) => task.isCompleted);
      state.tasks = [...incompleteTasks, ...completeTasks];
    },
  },
});

export const { addTask, removeTask, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
