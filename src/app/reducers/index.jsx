import { combineReducers } from '@reduxjs/toolkit';

import postReducer from './post/PostSlice';
import settingReducer from './setting/SettingSlice';

const reducer = combineReducers({
  setting: settingReducer,
  post: postReducer,
});

export default reducer;
