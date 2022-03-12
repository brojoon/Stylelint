import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import loginReducer from './modules/login';
import logoutReducer from './modules/logout';
import signupReducer from './modules/signup';
const makeStore = (context: any) =>
  configureStore({
    reducer: {
      login: loginReducer,
      logout: logoutReducer,
      signup: signupReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
