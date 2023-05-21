import { PostExtraReducer } from '@/app/reducers/post/PostExtraReducer';
import { initialState } from '@/app/reducers/post/PostState';
import { getCourses } from '@/app/reducers/post/PostThunk';
import { createSlice } from '@reduxjs/toolkit';
import { set } from 'lodash';

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    changeThemMode: (state, value) => {
      set(state, 'setting.isDarkMode', value.payload);
    },
  },
  extraReducers: (builder) => {
    PostExtraReducer(builder);
  },
});

export { getCourses };
export default postSlice.reducer;
