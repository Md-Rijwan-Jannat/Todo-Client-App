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
    editTask: (state, action: PayloadAction<ITodo>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      task!.title = action.payload.title;
      task!.description = action.payload.description;
      task!.credit = action.payload.credit;
    },
    highToLow: (state) => {
      state.tasks.sort((a, b) => (b.credit ?? 0) - (a.credit ?? 0));
    },
    lowToHigh: (state) => {
      state.tasks.sort((a, b) => (a.credit ?? 0) - (b.credit ?? 0));
    },
    medium: (state) => {
      state.tasks;
    },
  },
});

export const {
  addTask,
  removeTask,
  toggleComplete,
  editTask,
  highToLow,
  medium,
  lowToHigh,
} = todoSlice.actions;

export default todoSlice.reducer;
