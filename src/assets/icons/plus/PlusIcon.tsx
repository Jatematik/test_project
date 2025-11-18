import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const PlusIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path stroke="#fff" strokeWidth={1.5} d="M8.25 1v14M15 7.75H1" />
  </Svg>
);
