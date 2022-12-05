import { Box, HStack } from 'native-base';
import React from 'react';
import { FC } from 'react';
import { Text } from 'react-native';
import LogoIcon from '../atoms/LogoIcon';

interface Props {
  symbol: string,
  name?: string,
  icon_w: number,
  icon_h: number,
  icon_src: string,
}

const LogoSymbol: FC<Props> = ({
  symbol,
  name,
  icon_w,
  icon_h,
  icon_src
}) => {
  return (
    <HStack
      alignItems={'center'}
    >
      <LogoIcon
        w={icon_w}
        h={icon_h}
        src={icon_src}
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
          {symbol}
        </Text>
        <Text
          style={{
            fontSize: icon_w * 1.4,
            fontWeight: '100',
          }}
        >
          {name}
        </Text>
      </Box>
    </HStack>
  );
};

export default LogoSymbol;