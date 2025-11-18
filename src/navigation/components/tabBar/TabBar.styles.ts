import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: colors.black,
    paddingHorizontal: 16,
  },
  tabScrollContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    flexGrow: 1,
  },
  tabText: {
    fontSize: 14,
    textTransform: 'none',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 2,
    backgroundColor: colors.activeTab,
  },
});
