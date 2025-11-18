import * as React from 'react';
import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from 'react-native-svg';

export const ProfileIcon = (props: SvgProps) => (
  <Svg width={36} height={36} fill="none" {...props}>
    <Rect width={36} height={36} fill="#0F0F0F" rx={18} />
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M22 14.333v4h-8v-4a4 4 0 0 1 8 0ZM11 22a60.316 60.316 0 0 1-.433-.507l.002-.001.003-.003.009-.008a1.942 1.942 0 0 1 .128-.1c.085-.064.208-.151.368-.254.32-.206.79-.474 1.41-.74 1.243-.532 3.082-1.054 5.513-1.054s4.27.522 5.513 1.054a9.63 9.63 0 0 1 1.41.74 6.268 6.268 0 0 1 .496.354l.01.008.003.003.001.001L25 22l.434-.506.233.2v3.973H10.333v-3.974l.234-.2L11 22Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M10 10h16v16H10z" />
      </ClipPath>
    </Defs>
  </Svg>
);
