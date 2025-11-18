import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fontFamily } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 64,
    height: 64,
    paddingVertical: 7.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fontFamily.medium,
    fontSize: 14,
    color: colors.white,
  },
});
