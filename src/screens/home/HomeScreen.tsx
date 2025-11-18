import { ScrollView, View } from 'react-native';

import { Cards, Expenses, Header, ServiceHub } from '../../components';
import { styles } from './HomeScreen.styles';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <ServiceHub />

        <Cards />

        <Expenses />
      </ScrollView>
    </View>
  );
};
