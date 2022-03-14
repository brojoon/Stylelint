import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';
import loginReducer from './modules/login';
import logoutReducer from './modules/logout';
import signupReducer from './modules/signup';
const makeStore = () =>
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

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
