import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fontFamily } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    padding: 16,
  },
  icon: {
    width: 42,
    height: 42,
    backgroundColor: colors.black0F,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoWrapper: { gap: 6, flexShrink: 1 },
  titleWrapper: {
    gap: 4,
  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.white,
  },
  cash: {
    fontFamily: fontFamily.semiBold,
    fontSize: 21,
    color: colors.medium,
  },
  message: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  date: {
    fontFamily: fontFamily.regular,
    fontSize: 12,
    color: colors.gray,
  },
  circleWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    top: 0.5,
    backgroundColor: colors.medium,
  },
});
