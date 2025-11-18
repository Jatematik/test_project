import { TouchableOpacity, View } from 'react-native';
import { Card } from '../card/Card';
import { PlusIcon } from '../../assets/icons';
import { styles } from './Cards.styles';

export const Cards = () => {
  return (
    <View style={styles.container}>
      <Card
        bgImage="activeCard"
        type="Debit"
        cash="$4,098.12"
        cardNumber="•• 4385"
      />
      <Card bgImage="card" type="Virtual" cash="$14.71" cardNumber="•• 9081" />

      <TouchableOpacity style={styles.plus}>
        <PlusIcon />
      </TouchableOpacity>
    </View>
  );
};
