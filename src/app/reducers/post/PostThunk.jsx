import postService from '@/app/reducers/post/PostService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCourses = createAsyncThunk('courses/get', async (arg, thunkAPI) => {
  try {
    return await postService.get(arg);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const getCourse = createAsyncThunk('courses/show', async (arg, thunkAPI) => {
  try {
    return await postService.get(arg);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});
