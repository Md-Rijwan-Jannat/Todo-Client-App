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
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task._id === action.payload);
      task!.isCompleted = !task?.isCompleted;
      const incompleteTasks = state.tasks.filter((task) => !task.isCompleted);
      const completeTasks = state.tasks.filter((task) => task.isCompleted);
      state.tasks = [...incompleteTasks, ...completeTasks];
    },
    editTask: (state, action: PayloadAction<ITodo>) => {
      const task = state.tasks.find((task) => task._id === action.payload._id);
      task!.title = action.payload.title;
      task!.description = action.payload.description;
      task!.priority = action.payload.priority;
    },
  },
});

export const { addTask, removeTask, toggleComplete, editTask } =
  todoSlice.actions;

export default todoSlice.reducer;
