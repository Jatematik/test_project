import { StyleSheet } from 'react-native';

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
    color: '#fff',
    fontWeight: 700,
  },
  text: {
    fontSize: 14,
    color: '#fff',
  },
});
