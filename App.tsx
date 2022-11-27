import { NativeBaseProvider } from 'native-base';
import React, { FC, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from './src/components/stores/store';
import CryptoListScreen from './src/screens/CryptoListScreen';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});

const App: FC = () => {
  const store = createStore();

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaView
          style={styles.viewStyle}
        >
          <CryptoListScreen />
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;