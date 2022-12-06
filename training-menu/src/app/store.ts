import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dishReducer from './reducers/dishReducer';


export const store = configureStore({
  reducer: {
  dishAction: dishReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
