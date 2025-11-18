import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const BackIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path stroke="#fff" strokeWidth={2} d="m15 6-6 6 6 6" />
  </Svg>
);
