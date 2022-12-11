import { Box, HStack } from 'native-base';
import React from 'react';
import { FC } from 'react';
import { Text } from 'react-native';
import LogoIcon from '../atoms/LogoIcon';
import PriceBox from '../atoms/PriceBox';

interface Props {
  crypto_info: any,
  crypto_price: any,
  icon_w: number,
  icon_h: number,
  margin: number,
}

const LogoSymbol: FC<Props> = ({
  crypto_info,
  crypto_price,
  icon_w,
  icon_h,
  margin,
}) => {
  return (
    <HStack
      justifyContent={'space-between'}
      alignItems={'center'}
      marginTop={margin}
      marginBottom={margin}
      marginLeft={margin * 1.5}
      marginRight={margin * 1.5}
      flex={1}
    >
      <Box>
        <HStack>
          <LogoIcon
            w={icon_w}
            h={icon_h}
            src={crypto_info?.logo}
          />
          <Box
            marginLeft={icon_w / 4}
          >
            <Text
              style={{
                fontSize: icon_w * 2,
                fontFamily: 'Futura',
                fontWeight: 'bold'
              }}
            >
              {crypto_info?.symbol}
            </Text>
            <Text
              style={{
                fontSize: icon_w * 1.4,
                fontWeight: '100',
              }}
            >
              {crypto_info?.name}
            </Text>
          </Box>
        </HStack>
      </Box>
      <Box>
        <PriceBox 
          crypto_price={crypto_price}
        />
      </Box>
    </HStack>
  );
};

export default LogoSymbol;