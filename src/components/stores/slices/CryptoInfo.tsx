import { createSlice } from '@reduxjs/toolkit';
import { getInfo } from '../../../api/CoinMarketCapApi/CryptoCurrency/getInfo';

export const CryptoInfoSlice = createSlice({
  name: 'crypto_info',
  initialState: {
    crypto_info_status: null,
    crypto_info_data: [],

    is_set_crypto_info: false,
    is_loading_crypto_info: false,
    is_error_crypto_info: false,
  },
  reducers: {
    fetchStart(state: any) {
      state.is_loading_crypto_info = true;
    },
    fetchFailure(state: any) {
      state.is_loading_crypto_info = false;
      state.is_error_crypto_info = true;
    },
    fetchSuccess(state: any, action: any) {
      state.is_set_crypto_info = true;
      state.is_loading_crypto_info = false;

      if (action.payload.status === undefined || action.payload.status.error_code !== 0) {
        state.is_error_crypto_info = true;
        return;
      }

      state.crypto_info_status = action.payload.status;
      state.crypto_info_data = action.payload.data;
    }
  }
});

export const { fetchStart, fetchFailure, fetchSuccess } = CryptoInfoSlice.actions;

export const fetchCryptoInfo = (
  id_list: number[],
) => async (dispatch: any) => {
  try {
    dispatch(fetchStart());
    dispatch(fetchSuccess(await getInfo(id_list)));
  } catch (error) {
    dispatch(fetchFailure());
  }
};

export const SelectCryptoInfo = ({crypto_info}: {crypto_info: any}) => {
  crypto_info;
};

export default CryptoInfoSlice;