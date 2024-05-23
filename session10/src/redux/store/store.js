// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../reducer/todosSlice';

export const store = configureStore({
    reducer: {
        todos: todosSlice
    },
});