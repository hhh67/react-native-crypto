import { Box, HStack } from 'native-base';
import React from 'react';
import { FC } from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';

interface Props {
  percent_change_1h?: number,
  percent_change_24h?: number,
  percent_change_7d?: number,
  percent_change_30d?: number,
}

const styles = StyleSheet.create({
  priceStack: {
    marginBottom: Dimensions.get('window').height * 0.01,
    alignItems: 'center',
  },
  priceBox: {
    width: Dimensions.get('window').width * 0.15,
  },
  priceIndicateText: {
    fontSize: 28
  },
  priceText: {
    fontSize: 24,
  }
});

const FocusedPriceInfo: FC<Props> = ({
  percent_change_1h,
  percent_change_24h,
  percent_change_7d,
  percent_change_30d,
}) => {
  return (
    <Box
      marginTop={Dimensions.get('window').height * 0.02}
      paddingLeft={Dimensions.get('window').width * 0.15}
    >
      <HStack style={styles.priceStack}>
        <Box style={styles.priceBox}>
          <Text style={styles.priceIndicateText}>
            1h: 
          </Text>
        </Box>
        <Text
          style={{
            ...styles.priceText,
            color: percent_change_1h !== undefined ? percent_change_1h > 0 ? '#2d4' : '#f00' : ''
          }}
        >
          {(percent_change_1h !== undefined && percent_change_1h > 0 ? '+' : '') + percent_change_1h?.toFixed(2) + '%'}
        </Text>
      </HStack>
      <HStack style={styles.priceStack}>
        <Box style={styles.priceBox}>
          <Text style={styles.priceIndicateText}>
            24h: 
          </Text>
        </Box>
        <Text
          style={{
            ...styles.priceText,
            color: percent_change_1h !== undefined ? percent_change_1h > 0 ? '#2d4' : '#f00' : ''
          }}
        >
          {(percent_change_24h !== undefined && percent_change_24h > 0 ? '+' : '') + percent_change_24h?.toFixed(2) + '%'}
        </Text>
      </HStack>
      <HStack style={styles.priceStack}>
        <Box style={styles.priceBox}>
          <Text style={styles.priceIndicateText}>
            7d: 
          </Text>
        </Box>
        <Text
          style={{
            ...styles.priceText,
            color: percent_change_7d !== undefined ? percent_change_7d > 0 ? '#2d4' : '#f00' : ''
          }}
        >
          {(percent_change_7d !== undefined && percent_change_7d > 0 ? '+' : '') + percent_change_7d?.toFixed(2) + '%'}
        </Text>
      </HStack>
      <HStack style={styles.priceStack}>
        <Box style={styles.priceBox}>
          <Text style={styles.priceIndicateText}>
            30d: 
          </Text>
        </Box>
        <Text
          style={{
            ...styles.priceText,
            color: percent_change_30d !== undefined ? percent_change_30d > 0 ? '#2d4' : '#f00' : ''
          }}
        >
          {(percent_change_30d !== undefined && percent_change_30d > 0 ? '+' : '') + percent_change_30d?.toFixed(2) + '%'}
        </Text>
      </HStack>
    </Box>
  );
};

export default FocusedPriceInfo;
