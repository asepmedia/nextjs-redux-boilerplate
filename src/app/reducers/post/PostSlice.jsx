import postService from '@/app/reducers/post/PostService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { set } from 'lodash';

const initialState = {
  courses: {
    loading: false,
    error: false,
    message: '',
    data: [],
    page: 1,
  },
};

export const getCourses = createAsyncThunk('courses/get', async (arg, thunkAPI) => {
  try {
    return await postService.get(arg);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    changeThemMode: (state, value) => {
      set(state, 'setting.isDarkMode', value.payload || initialState.setting.isDarkMode);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        set(state, 'courses.data', action.payload.data || []);
        // state.data = action.payload;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export default postSlice.reducer;
