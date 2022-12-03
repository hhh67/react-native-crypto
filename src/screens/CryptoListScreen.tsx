import { Center, ScrollView } from 'native-base';
import React, { FC, useState } from 'react';
import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCryptoInfo } from '../components/stores/slices/CryptoInfo';
import { fetchCryptoPrice } from '../components/stores/slices/CryptoPrice';
import { AppDispatch, RootState } from '../components/stores/store';
import { ConsoleBlue, ConsoleCyan, ConsoleMagenta, ConsoleRed } from '../const';

const styles = StyleSheet.create({
  errorContentView: {
    justifyContent: 'center',
    backgroundColor: '#f44',
    height: Dimensions.get('window').height * 0.15,
  },
  errorMessageText: {
    color: 'white',
    fontSize: 20,
  }
});

const CryptoListScreen: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [error_message, setErrorMessage] = useState('');

  const {
    crypto_map_status,
    crypto_map_data,
    is_set_crypto_map,
    is_loading_crypto_map,
    is_error_crypto_map
  } = useSelector((state: RootState) => state.crypto_map);
  const {
    crypto_price_status,
    crypto_price_data,
    is_set_crypto_price,
    is_loading_crypto_price,
    is_error_crypto_price,
  } = useSelector((state: RootState) => state.crypto_price);
  const {
    crypto_info_status,
    crypto_info_data,
    is_set_crypto_info,
    is_loading_crypto_info,
    is_error_crypto_info,
  } = useSelector((state: RootState) => state.crypto_info);

  // todo: map APIの結果を使用してid_listを生成し、価格とメタ情報を取得する。
  // 非同期処理を使用しているとid_listを正常に生成できない。
  const id_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  useEffect(() => {
    async function API() {
      ConsoleBlue('api start');

      await dispatch(fetchCryptoPrice(id_list));
      if (is_error_crypto_price) {
        setErrorMessage('価格取得時にエラーが発生しました。');
        console.log('価格エラー');
        return;
      }
      await dispatch(fetchCryptoInfo(id_list));
      if (is_error_crypto_info) {
        setErrorMessage('情報取得時にエラーが発生しました。');
        console.log('情報エラー');
        return;
      }

      ConsoleRed('api end');
    }
    // 起動時実行
    API();
    // 1分ごとに更新
    setInterval(() => {
      API();
    }, 60000);
  }, [
    dispatch
  ]);

  const CryptoList: FC = () => {
    for (let key in crypto_price_data) {
      if ((crypto_price_data[key] as any).id !== (crypto_info_data[key] as any).id) break;

      ConsoleCyan(JSON.stringify(crypto_price_data[key]));
    } 
    for (let key in crypto_info_data) {
      ConsoleMagenta(JSON.stringify(crypto_info_data[key]));
    }

    return (
      <ScrollView>
      </ScrollView>
    );
  };

  return (
    error_message !== '' 
      ? 
      <View style={styles.errorContentView}>
        <Center backgroundColor={'red'}>
          <Text style={styles.errorMessageText}>
            {error_message}
          </Text>
        </Center>
      </View>
      : 
      <View>
        <CryptoList />
      </View>
  );
};

export default CryptoListScreen;