import { createSlice } from "@reduxjs/toolkit";

//getting todo from localstorage
const getDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todoItems")) || [];
};

const TaskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getDataFromLocalStorage(),
  },
  reducers: {
    //add task to tasks
    addTask(state, action) {
      state.tasks.push(action.payload);
      localStorage.setItem(
        "todoItems",
        JSON.stringify(state.tasks.map((todo) => todo))
      );
    },
    //delete task from tasks
    removeTask(state, action) {
      const filtered = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = filtered;
      localStorage.setItem(
        "todoItems",
        JSON.stringify(state.tasks.map((task) => task))
      );
    },
    //update the specific task
    updateTask(state, action) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          task = action.payload;
        }
        return task;
      });
      localStorage.setItem(
        "todoItems",
        JSON.stringify(state.tasks.map((task) => task))
      );
    },
  },
});

const { reducer } = TaskSlice;

export default reducer;
export const { addTask, handleCheck, removeTask, updateTask } =
  TaskSlice.actions;
