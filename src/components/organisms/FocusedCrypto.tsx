import { Box } from 'native-base';
import React from 'react';
import { FC } from 'react';
import FocusedLogoTitle from '../molecules/FocusedLogoTitle';
import FocusedPriceInfo from '../molecules/FocusedPriceInfo';

interface Props {
  focused_info: any,
  focused_price: any,
}

const FocusedCrypto: FC<Props> = ({
  focused_info,
  focused_price
}) => {
  return (
    <Box>
      <FocusedLogoTitle
        logo={focused_info?.logo}
        name={focused_info?.name}
      />
      <FocusedPriceInfo
        percent_change_1h={focused_price?.quote.JPY.percent_change_1h}
        percent_change_24h={focused_price?.quote.JPY.percent_change_24h}
        percent_change_7d={focused_price?.quote.JPY.percent_change_7d}
        percent_change_30d={focused_price?.quote.JPY.percent_change_30d}
      />
    </Box>
  );
};

export default FocusedCrypto;