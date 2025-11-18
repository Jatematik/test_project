import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ShieldIcon = (props: SvgProps) => (
  <Svg width={17} height={20} fill="none" {...props}>
    <Path
      fill="#FE5900"
      d="M8.333 0 7.755.56a4.891 4.891 0 0 1-6.13.536l-.326-.22L0 0v15.497l.437.236 7.5 4.05.396.214V0Z"
    />
    <Path
      fill="#FE5900"
      d="m8.333 0 .579.559a4.891 4.891 0 0 0 6.13.536l.325-.22 1.3-.875v15.497l-.438.236-7.5 4.05-.396.214V0Z"
      opacity={0.2}
    />
  </Svg>
);
