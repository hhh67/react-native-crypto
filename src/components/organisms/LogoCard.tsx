import { Box } from 'native-base';
import React from 'react';
import { FC } from 'react';
import LogoSymbol from '../molecules/LogoSymbol';

interface Props {
  crypto_info: any,
  crypto_price: any,
  icon_w: number,
  icon_h: number,
  margin: number,
}

const LogoCard: FC<Props> =  ({
  crypto_info,
  crypto_price,
  icon_w,
  icon_h,
  margin
}) => {
  return (
    <Box
      borderBottomWidth={0.2}
      borderBottomColor={'#999'}
    >
      <LogoSymbol
        crypto_info={crypto_info}
        crypto_price={crypto_price}
        icon_w={icon_w}
        icon_h={icon_h}
        margin={margin}
      />
    </Box>
  );
};

export default LogoCard;