import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './Notification.styles';
import { NotificationProps } from '../../types';

interface INotificationProps {
  item: NotificationProps;
}

export const Notification = ({ item }: INotificationProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      {item.avatar ? (
        <Image source={item.avatar} />
      ) : (
        <View style={styles.icon}>{item.icon}</View>
      )}

      <View style={styles.infoWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.title}</Text>
          {item.cash && <Text style={styles.cash}>{item.cash}</Text>}
        </View>

        <Text style={styles.message}>{item.message}</Text>

        <Text style={styles.date}>{item.date}</Text>
      </View>

      <View style={styles.circleWrapper}>
        {!item.isRead && <View style={styles.circle} />}
      </View>
    </TouchableOpacity>
  );
};
