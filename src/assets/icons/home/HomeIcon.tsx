import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface SVGRProps extends SvgProps {
  iconColor?: string;
}

export const HomeIcon = ({ iconColor = '#fff', ...props }: SVGRProps) => (
  <Svg width={21} height={20} fill="none" {...props}>
    <Path
      fill={iconColor}
      fillRule="evenodd"
      d="M20.125 8.254 10.5.004.875 8.254v10.913h19.25V8.254Z"
      clipRule="evenodd"
    />
  </Svg>
);
