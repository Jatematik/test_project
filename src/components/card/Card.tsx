import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MasterCardIcon } from '../../assets/icons';
import { styles } from './Card.styles';

interface CardProps {
  bgImage?: 'card' | 'activeCard';
  cash: string;
  type: 'Virtual' | 'Debit';
  cardNumber: string;
}

const images = {
  card: require('../../assets/images/card.png'),
  activeCard: require('../../assets/images/active-card.png'),
  //сбер, втб, ...
};

export const Card = ({
  bgImage = 'card',
  type,
  cash,
  cardNumber,
}: CardProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={images[bgImage]} />

      <MasterCardIcon />

      <View style={styles.infoWrapper}>
        <Text numberOfLines={1} style={styles.cash}>
          {cash}
        </Text>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{type}</Text>
          <Text style={styles.text}>{cardNumber}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
