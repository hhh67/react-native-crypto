import { Box, Center, ScrollView } from 'native-base';
import React, { FC, useState } from 'react';
import { useEffect } from 'react';
import { Dimensions, TouchableHighlight } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import FocusedCrypto from '../components/organisms/FocusedCrypto';
import LogoCard from '../components/organisms/LogoCard';
import { fetchCryptoInfo } from '../components/stores/slices/CryptoInfo';
import { fetchCryptoMap } from '../components/stores/slices/CryptoMap';
import { fetchCryptoPrice } from '../components/stores/slices/CryptoPrice';
import { AppDispatch, RootState } from '../components/stores/store';
import { ConsoleYellow } from '../const';

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

  useEffect(() => {
    const API = async () => {
      await dispatch(fetchCryptoMap(25));
    };
    
    API();
  }, []);
    
  let id_list: number[] = [];
  crypto_map_data.forEach((data: any) => {
    id_list.push(data.id);
  });

  useEffect(() => {
    const API = async () => {
      await dispatch(fetchCryptoPrice(id_list));
      await dispatch(fetchCryptoInfo(id_list));
    };

    API();
  }, [
    id_list.length
  ]);

  const [focused_info, setFocusedInfo] = useState(null);
  const [focused_price, setFocusedPrice] = useState(null);
  const Cards: any[] = [];
  id_list.forEach((id: any, key: number) => {
    Cards.push(
      <TouchableHighlight
        underlayColor={'#effafa'}
        onPress={() => {
          setFocusedInfo(crypto_info_data[id]);
          setFocusedPrice(crypto_price_data[id]);
        }}
      >
        <LogoCard
          crypto_info={crypto_info_data[id]}
          crypto_price={crypto_price_data[id]}
          icon_w={10}
          icon_h={10}
          margin={4}
        />
      </TouchableHighlight>
    );
  });
  
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
      <View
        style={{
          justifyContent: 'center',
          height: Dimensions.get('window').height * 0.9,
        }}
      >
        <Box
          h={'45%'}
        >
          <FocusedCrypto
            focused_info={focused_info}
            focused_price={focused_price}
          />
        </Box>
        <Box
          h={'55%'}
          borderTopWidth={1}
          borderTopColor={'#ccd'}
          borderBottomWidth={1}
          borderBottomColor={'#ccd'}
        >
          <ScrollView
          >
            {Cards}
          </ScrollView>
        </Box>
      </View>
  );
};

export default CryptoListScreen;