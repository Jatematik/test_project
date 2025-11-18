import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import {
  ArrowIcon,
  NotificationsIcon,
  ProfileIcon,
  QrCodeIcon,
} from '../../assets/icons';
import { styles } from './Header.styles';
import { RootStackParamList, Routes } from '../../types';

export const Header = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleGoToNotifications = () =>
    navigation.navigate(Routes.Notifications);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileButton}>
        <ProfileIcon />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Charlotte</Text>

          <ArrowIcon style={styles.arrow} />
        </View>
      </TouchableOpacity>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn} onPress={handleGoToNotifications}>
          <NotificationsIcon />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <QrCodeIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};
