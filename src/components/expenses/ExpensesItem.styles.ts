import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    backgroundColor: '#0F0F0F',
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
  name: { fontSize: 14, fontWeight: 500, color: '#FFFFFF' },
  purpose: { fontSize: 14, color: '#B3B3B3' },
  cash: {
    fontSize: 14,
    fontWeight: 500,
    color: '#FFFFFF',
    marginLeft: 'auto',
  },
  date: { fontSize: 14, color: '#B3B3B3', marginLeft: 'auto' },
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
