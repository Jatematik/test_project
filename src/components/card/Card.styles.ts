import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fontFamily } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    height: 98,
    width: 142,
    padding: 12,
    justifyContent: 'space-between',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  infoWrapper: {
    gap: 6,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cash: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fontFamily.semiBold,
  },
  text: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.white,
  },
});
