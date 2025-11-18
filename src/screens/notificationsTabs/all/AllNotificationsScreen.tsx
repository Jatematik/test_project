import { SectionList, Text, View } from 'react-native';

import { Notification } from '../../../components';
import { ShieldIcon, TransferIcon } from '../../../assets/icons';
import { styles } from './AllNotificationsScreen.styles';
import { NotificationProps } from '../../../types';

const DATA: {
  title: string;
  data: NotificationProps[];
}[] = [
  {
    title: 'Today, 17 JunE',
    data: [
      {
        id: '1',
        avatar: require('../../../assets/images/avatars/anna.png'),
        title: 'Received from Anna',
        cash: '+$110',
        message: `Debit •• 4385\n$4,098.12`,
        date: '17 June 2025, 17:49 · Payments',
        isRead: false,
      },
    ],
  },
  {
    title: 'YESTERDay, 16 JunE',
    data: [
      {
        id: '1',
        icon: <TransferIcon />,
        title: 'See our limited offer!',
        message: `Would you like to visit new countries? Maybe it’s your time!`,
        date: '16 June 2025, 23:08 · Travel',
        isRead: true,
      },
      {
        id: '2',
        icon: <TransferIcon />,
        title: 'Sent to •• 2041',
        cash: '-$14.62',
        message: `Debit •• 4385\n$3,987.5`,
        date: '16 June 2025, 06:18· Payments',
        isRead: true,
      },
    ],
  },
  {
    title: '24 MARCH, 2025',
    data: [
      {
        id: '1',
        icon: <ShieldIcon />,
        title: 'New login into account',
        message: `You have logged in from a new location:
iOS 26.0.1 · 109.255.84.7 · Spain`,
        date: '24 March 2025, 15:44 · Security',
        isRead: true,
      },
    ],
  },
];

export const AllNotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => <Notification key={item.id} item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <>
            <View style={styles.separator} />
            <Text style={styles.title}>{title}</Text>
          </>
        )}
      />
      <View style={styles.separator} />
    </View>
  );
};
