import { createSlice } from '@reduxjs/toolkit';
import { getMap } from '../../../api/CoinMarketCapApi/CryptoCurrency/getMap';
import { ConsoleGreen, ConsoleYellow } from '../../../const';

export const CryptoMapSlice = createSlice({
  name: 'crypto_map',
  initialState: {
    crypto_map_status: null,
    crypto_map_data: [],

    is_set_crypto_map: false,
    is_loading_crypto_map: false,
    is_error_crypto_map: false,
  },
  reducers: {
    fetchStart(state: any) {
      state.is_loading_crypto_map = true;
    },
    fetchFailure(state: any) {
      state.is_loading_crypto_map = false;
      state.is_error_crypto_map = true;
    },
    fetchSuccess(state: any, action: any) {
      state.is_set_crypto_map = true;
      state.is_loading_crypto_map = false;

      if (action.payload.status === undefined || action.payload.status.error_code !== 0) {
        state.is_error_crypto_map = true;
        return;
      }

      state.crypto_map_status = action.payload.status;
      state.crypto_map_data = action.payload.data;
      ConsoleGreen(JSON.stringify(state.crypto_map_data));
    }
  }
});

export const { fetchStart, fetchFailure, fetchSuccess } = CryptoMapSlice.actions;

export const fetchCryptoMap = (
  limit: number,
  listing_status?: 'active'|'inactive'|'untracked',
  start?: number,
  sort?: 'id'|'cmc_rank',
) => async (dispatch: any) => {
  try {
    dispatch(fetchStart());
    dispatch(fetchSuccess(await getMap(limit, listing_status, start, sort)));
  } catch (error) {
    dispatch(fetchFailure());
  }
};

export const SelectCryptoMap = ({crypto_map}: {crypto_map: any}) => {
  crypto_map;
};

export default CryptoMapSlice;