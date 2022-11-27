import { createSlice } from '@reduxjs/toolkit';
import { getPrice } from '../../../api/CoinMarketCapApi/CryptoCurrency/getPrice';
import { ConsoleYellow } from '../../../const';

export const CryptoPriceSlice = createSlice({
  name: 'crypto_price',
  initialState: {
    crypto_price_status: null,
    crypto_price_data: [],

    is_set_crypto_price: false,
    is_loading_crypto_price: false,
    is_error_crypto_price: false,
  },
  reducers: {
    fetchStart(state: any) {
      state.is_loading_crypto_price = true;
    },
    fetchFailure(state: any) {
      state.is_loading_crypto_price = false;
      state.is_error_crypto_price = true;
    },
    fetchSuccess(state: any, action: any) {
      state.is_set_crypto_price = true;
      state.is_loading_crypto_price = false;

      if (action.payload.status === undefined || action.payload.status.error_code !== 0) {
        state.is_error_crypto_price = true;
        return;
      }

      state.crypto_price_status = action.payload.status;
      state.crypto_price_data = action.payload.data;
    }
  }
});

export const { fetchStart, fetchFailure, fetchSuccess } = CryptoPriceSlice.actions;

export const fetchCryptoPrice = (
  id_list: number[],
) => async (dispatch: any) => {
  try {
    dispatch(fetchStart());
    dispatch(fetchSuccess(await getPrice(id_list)));
  } catch (error) {
    dispatch(fetchFailure());
  }
};

export const SelectCryptoPrice = ({crypto_price}: {crypto_price: any}) => {
  crypto_price;
};

export default CryptoPriceSlice;