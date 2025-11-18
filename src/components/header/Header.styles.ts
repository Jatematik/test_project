import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8.5,
  },
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 18,
  },
  arrow: {
    top: 1,
  },
  qr: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
