import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fontFamily } from '../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontFamily: fontFamily.medium,
    color: colors.white,
    fontWeight: 500,
    fontSize: 21,
  },
  month: {
    fontFamily: fontFamily.medium,
    color: colors.medium,
  },
  money: {
    fontFamily: fontFamily.regular,
    color: colors.textSecondary,
    fontSize: 18,
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingBottom: 8,
  },
  bar1: {
    borderRadius: 3,
    height: 8,
    backgroundColor: colors.high,
    flex: 1,
  },
  bar2: {
    borderRadius: 3,
    height: 8,
    backgroundColor: colors.medium,
    flex: 1 / 2,
  },
  bar3: {
    borderRadius: 3,
    height: 8,
    backgroundColor: colors.low,
    flex: 1 / 3,
  },
  bar4: {
    borderRadius: 3,
    height: 8,
    backgroundColor: colors.idle,
    flex: 1 / 4,
  },
  sectionTitle: {
    fontFamily: fontFamily.medium,
    marginTop: 24,
    marginBottom: 10,
    fontWeight: 500,
    color: colors.white,
    fontSize: 16,
  },
});
