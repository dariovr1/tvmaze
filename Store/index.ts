import { configureStore,ThunkAction, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import {mazeReducer} from './Slice/Maze';

  const rootReducer = combineReducers({
    film : mazeReducer,
  });

  export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
  }),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

