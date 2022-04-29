import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
// import logger from 'redux-logger';
import { rootReducer, persistedReducer } from './modules';
import { persistStore, persistReducer } from 'redux-persist';
import { useDispatch } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

// server-side 스토어와 client-side store를 합쳐준다.
//createStore(reducer, undefined, applyMiddleware(logger, thunkMiddleware));
//dev 모드 스토어
const makeConfiguredStore = (reducer: any) =>
  createStore(reducer, undefined, applyMiddleware(thunkMiddleware));
const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfiguredStore(rootReducer);
  } else {
    // we need it only on client side
    const store = makeConfiguredStore(persistedReducer);
    let persistor = persistStore(store);
    return { persistor, ...store };
  }
};

// wrapper 로 감싸기
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
