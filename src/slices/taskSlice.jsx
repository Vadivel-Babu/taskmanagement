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
    //add todo to todos
    addTask(state, action) {
      state.tasks.push(action.payload);
      localStorage.setItem(
        "todoItems",
        JSON.stringify(state.tasks.map((todo) => todo))
      );
    },
    //delete todo from todos
    removeTask(state, action) {
      const filtered = state.tasks.filter((task) => task.id !== action.payload);
      state.tasks = filtered;
      localStorage.setItem(
        "todoItems",
        JSON.stringify(state.tasks.map((task) => task))
      );
    },
    //change the checking status for the todo
    handleCheck(state, action) {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.isChecked = !todo.isChecked;
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
export const { addTask, handleCheck, removeTask } = TaskSlice.actions;
