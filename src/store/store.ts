import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Definir tipos para o RootState e AppDispatch para tipagem no projeto
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
