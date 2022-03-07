import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import counter from './counter';
import login from './login';
const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({
    counter,
    login,
    // 여기에추가
  })(state, action);
};
export default reducer;
