import { createSlice } from "@reduxjs/toolkit";
import { set } from "lodash";

const initialState = {
  isDarkMode: false,
  setting: {
    isDarkMode: true,
  },
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    changeThemMode: (state, value) => {
      set(
        state,
        "setting.isDarkMode",
        value.payload || initialState.setting.isDarkMode
      );
    },
  },
});

export const { changeThemMode } = settingSlice.actions;

export default settingSlice.reducer;
