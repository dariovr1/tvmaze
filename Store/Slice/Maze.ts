import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
  } from "@reduxjs/toolkit";
import axios from "axios";
import { Result, Show } from "../../model/Search/tvmaze";
import { MazeState } from "../../model/Slice";
import handleReducer from "../Common";

  const initialState: MazeState = {
    data : [],
    loading: false,
    errors: "",
  }

  export const fetchtv = createAsyncThunk(
    'film/search',
    // if you type your function argument here
    async (text: string,thunkAPI) => {
      try {
        console.log("text is ",text);
        const response = await axios.get<Result[]>(`http://api.tvmaze.com/search/shows?q=${text}`);
        thunkAPI.dispatch(setResult(response.data));
        return response;
      } catch (error) {
        console.log("an error has been found.",error);
      }
    }
  );
  

  const mazeSlice  = createSlice({
    name: "search",
    initialState,
    reducers: {
      setResult: (state, { payload } : PayloadAction<Result[]>) => {
        state.data = [...payload]
      },
    },
    extraReducers : handleReducer(fetchtv),
  });

  export const { setResult } = mazeSlice.actions;


  export const mazeReducer = mazeSlice.reducer;

