import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './tasksSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});