import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ArrowIcon = (props: SvgProps) => (
  <Svg width={6} height={10} fill="none" {...props}>
    <Path stroke="#fff" strokeWidth={1.5} d="m.53.53 4 4-4 4" />
  </Svg>
);
