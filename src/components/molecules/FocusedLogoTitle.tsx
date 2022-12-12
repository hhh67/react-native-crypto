import { Box, HStack } from 'native-base';
import React, { FC } from 'react';
import { Dimensions, Text } from 'react-native';
import LogoIcon from '../atoms/LogoIcon';

interface Props {
  logo?: any,
  name?: string,
}

const FocusedLogoTitle: FC<Props> = ({
  logo,
  name,
}) => {
  return (
    <Box>
      <HStack
        marginTop={Dimensions.get('window').height * 0.01}
      >
        <Box
          marginLeft={Dimensions.get('window').width * 0.05}
        >
          <LogoIcon
            w={10}
            h={10}
            src={logo}
          />
        </Box>
        <Box
          justifyContent={'center'}
          marginLeft={2}
        >
          <Text
            style={{
              fontFamily: 'Futura',
              fontWeight: 'bold',
              fontSize: 30,
            }}
          >
            {name}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default FocusedLogoTitle;