import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface SVGRProps extends SvgProps {
  iconColor?: string;
}

export const HistoryIcon = ({ iconColor = '#fff', ...props }: SVGRProps) => (
  <Svg width={21} height={20} fill="none" {...props}>
    <Path
      fill={iconColor}
      fillRule="evenodd"
      d="M10.495.667A9.164 9.164 0 0 0 1.33 9.833 9.168 9.168 0 0 0 10.495 19a9.164 9.164 0 0 0 9.165-9.167A9.168 9.168 0 0 0 10.495.667Zm-.833 4.166v5.834h4.166V9h-2.5V4.833H9.662Z"
      clipRule="evenodd"
    />
  </Svg>
);
