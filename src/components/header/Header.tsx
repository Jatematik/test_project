import { Text, TouchableOpacity, View } from 'react-native';
import { ArrowIcon, ProfileIcon, QrCodeIcon } from '../../assets/icons';
import { styles } from './Header.styles';

export const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileButton}>
        <ProfileIcon />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Charlotte</Text>

          <ArrowIcon style={styles.arrow} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.qr}>
        <QrCodeIcon />
      </TouchableOpacity>
    </View>
  );
};
