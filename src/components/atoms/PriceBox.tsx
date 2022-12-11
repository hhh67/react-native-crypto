import { Box, HStack } from 'native-base';
import React from 'react';
import { FC } from 'react';
import { Text } from 'react-native';
import { ConsoleGreen } from '../../const';

interface Props {
  crypto_price: any,
}

const PriceBox: FC<Props> = ({
  crypto_price,
}) => {
  const price = Number(crypto_price?.quote.JPY.price);
  const display_price = 
    Boolean(price) === true ? 
      '¥ ' + (price > 9999 ?
        Number(price.toFixed()).toLocaleString()
        : price.toFixed(2))
      : '';

  const percent_change_24h = Number(crypto_price?.quote.JPY.percent_change_24h);
  let display_percent_change_24h = percent_change_24h.toFixed(2);
  let percent_color = '#2d4';
  if (percent_change_24h < 0) {
    percent_color = '#f00';
  } else {
    display_percent_change_24h = '+' + display_percent_change_24h;
  }
  display_percent_change_24h += '%';
  
  return (
    <React.Fragment>
      <Text
        style={{
          alignSelf: 'flex-end',
          fontFamily: 'HelveticaNeue-Bold',
          fontSize: 20,
        }}
      >
        {display_price}
      </Text>
      <Box
        marginTop={1}
        alignSelf={'flex-end'}
      >
        <Text
          style={{
            fontSize: 12,
            color: percent_color,
          }}
        >
          {display_percent_change_24h}
        </Text>
      </Box>
    </React.Fragment>
  );
};

export default PriceBox;