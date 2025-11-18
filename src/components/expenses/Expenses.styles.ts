import { StyleSheet } from 'react-native';

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
    color: '#fff',
    fontWeight: 500,
    fontSize: 21,
  },
  month: {
    color: '#FE5900',
  },
  money: {
    color: '#AEAEAE',
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
    backgroundColor: '#CC3F02',
    flex: 1,
  },
  bar2: {
    borderRadius: 3,
    height: 8,
    backgroundColor: '#FE5900',
    flex: 1 / 2,
  },
  bar3: {
    borderRadius: 3,
    height: 8,
    backgroundColor: '#FF9332',
    flex: 1 / 3,
  },
  bar4: {
    borderRadius: 3,
    height: 8,
    backgroundColor: '#FFD8A5',
    flex: 1 / 4,
  },
  sectionTitle: {
    marginTop: 24,
    marginBottom: 10,
    fontWeight: 500,
    color: '#FFF',
    fontSize: 16,
  },
});
