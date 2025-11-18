import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  separator: {
    height: 1,
    backgroundColor: colors.border,
  },
  title: {
    paddingTop: 16,
    paddingHorizontal: 16,
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
});
