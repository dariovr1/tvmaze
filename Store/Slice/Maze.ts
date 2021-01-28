import {
    createAsyncThunk,
    createSlice,
    PayloadAction,
  } from "@reduxjs/toolkit";
import axios from "axios";
import { Result, Show } from "../../model/Search/tvmaze";
import { MazeState } from "../../model/Slice";

  const initialState: MazeState = {
    data : [],
    loading: false,
    errors: "",
  }
  

  const mazeSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
      setLoading: (state, { payload }: PayloadAction<boolean>) => {
        state.loading = payload
      },
  
      setErrors: (state, { payload }: PayloadAction<string>) => {
        state.errors = payload;
      },
  
      setResult: (state, { payload } : PayloadAction<Result>) => {
        state.data.push(payload);
      },
    },
  });

  export const { setLoading,setErrors,setResult } = mazeSlice.actions;

  export const fetchtv = createAsyncThunk(
    'film/search',
    // if you type your function argument here
    async (text: string,thunkAPI) => {
      try {
        thunkAPI.dispatch(setLoading(true));
        const response = await axios.get<Result>(`http://api.tvmaze.com/search/shows?q=${text}`);
        thunkAPI.dispatch(setLoading(false));
        thunkAPI.dispatch(setResult(response.data));
        return response;
      } catch (error) {
          thunkAPI.dispatch(setErrors(error));
          thunkAPI.dispatch(setLoading(false));
      }
    }
  );

  export const mazeReducer = mazeSlice.reducer;

