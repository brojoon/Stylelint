import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import login from './login';
import logout from './logout';

import signup from './signup';
import basketRemove from './basketRemove';
import basketAdd from './basketAdd';
import paymentSave from './paymentSave';
import paymentDoneUpdate from './paymentDoneUpdate';
import paymentRecentSave from './paymentRecentSave';
import basketProductsSelectArr from './basketProductSelectArr';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'logout'],
};
export const rootReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({
    login,
    logout,
    signup,
    basketAdd,
    basketRemove,
    paymentSave,
    paymentDoneUpdate,
    paymentRecentSave,
    basketProductsSelectArr,
    // 여기에추가
  })(state, action);
};
export const persistedReducer = persistReducer(persistConfig, rootReducer);
