import { configureStore,ThunkAction, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import {mazeReducer} from './Slice/Maze';

const middleware = [
    ...getDefaultMiddleware(),
    /*YOUR CUSTOM MIDDLEWARES HERE*/
  ];

  const rootReducer = combineReducers({
    maze : mazeReducer,
  });

  export const store = configureStore({
    reducer: rootReducer,
    middleware,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

