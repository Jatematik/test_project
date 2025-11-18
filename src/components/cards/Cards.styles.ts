import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
  },
  plus: {
    backgroundColor: colors.black0F,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 16,
  },
});
