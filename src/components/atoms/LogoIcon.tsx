import { Image } from 'native-base';
import React from 'react';
import { FC } from 'react';

interface Props {
  w: number,
  h: number,
  src: string,
}

const LogoIcon: FC<Props> = ({
  w,
  h,
  src,
}) => {
  return (
    <Image
      w={w}
      h={h}
      alt={'test'}
      src={src}
    />
  );
};

export default LogoIcon;