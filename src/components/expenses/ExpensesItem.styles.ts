import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fontFamily } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: colors.black0F,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    flexDirection: 'row',
    gap: 12,
  },
  textWrapper: { justifyContent: 'space-between' },
  name: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    fontWeight: 500,
    color: colors.white,
  },
  purpose: { fontFamily: fontFamily.regular, fontSize: 14, color: colors.date },
  cash: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    fontWeight: 500,
    color: colors.white,
    marginLeft: 'auto',
  },
  date: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.date,
    marginLeft: 'auto',
  },
  purposeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5.5,
  },
  circle: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    top: 0.5,
  },
});
