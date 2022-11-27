import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import CryptoInfoSlice from './slices/CryptoInfo';
import CryptoMapSlice from './slices/CryptoMap';
import CryptoPriceSlice from './slices/CryptoPrice';

// rootReducer の準備
const rootReducer = combineReducers({
  crypto_map: CryptoMapSlice.reducer,
  crypto_price: CryptoPriceSlice.reducer,
  crypto_info: CryptoInfoSlice.reducer,
});

/* ログを出したい時は切り替え */
// const middlewares = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

// setup 関数を用意してエクスポートする。
export const createStore = () => {
  return store;
};
