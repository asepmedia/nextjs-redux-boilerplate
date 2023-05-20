import { combineReducers } from "@reduxjs/toolkit";

import settingReducer from "./setting/SettingSlice";

const reducer = combineReducers({
  setting: settingReducer,
});

export default reducer;
