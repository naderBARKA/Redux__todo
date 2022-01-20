import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTaskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
  
    addTask: (state, action) => {
      state.push(action.payload);
      return state;
    },
    
    removeTask: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },
  
    updateTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            el: action.payload.el,
          };
        }
        return task;
      });
    },
  
    completeTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: true,
          };
        }
        return task;
      });
    },
   
    uncompleteTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: false,
          };
        }
        return task;
      });
    },
  },
});

export const {
  filterTask,
  addTask,
  removeTask,
  updateTask,
  completeTask,
  uncompleteTask,
} = addTaskReducer.actions;

export const reducer = addTaskReducer.reducer;