import { Text, TouchableOpacity, View } from 'react-native';
import {
  BonusIcon,
  DeliveryIcon,
  SupportIcon,
  TravelIcon,
} from '../../assets/icons';
import { styles } from './ServiceHub.styles';

export const ServiceHub = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <TravelIcon />
        <Text style={styles.title}>Travel</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <DeliveryIcon />
        <Text style={styles.title}>Delivery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <BonusIcon />
        <Text style={styles.title}>Bonuses</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <SupportIcon />
        <Text style={styles.title}>Support</Text>
      </TouchableOpacity>
    </View>
  );
};
