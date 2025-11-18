import { SectionList, Text, View } from 'react-native';
import { ExpensesItem } from './ExpensesItem';
import { styles } from './Expenses.styles';

type Circle = 'high' | 'medium' | 'low';

const DATA: {
  title: string;
  data: {
    id: string;
    avatar: any;
    name: string;
    cash: string;
    purpose: string;
    date: string;
    circle: Circle;
  }[];
}[] = [
  {
    title: 'Today',
    data: [
      {
        id: '1',
        avatar: require('../../assets/images/avatars/matthew.png'),
        name: 'Matthew Billson',
        cash: '$56.19',
        purpose: 'Money Transfer',
        date: 'Jun 9, 12:08',
        circle: 'high',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        id: '1',
        avatar: require('../../assets/images/avatars/starbucks.png'),
        name: 'Starbucks',
        cash: '$122.47',
        purpose: 'Food',
        date: 'Jun 8, 19:21',
        circle: 'medium',
      },
      {
        id: '2',
        avatar: require('../../assets/images/avatars/netflix.png'),
        name: 'Netflix',
        cash: '$13.17',
        purpose: 'Entertainment',
        date: 'Jun 8, 08:53',
        circle: 'low',
      },
    ],
  },
];

export const Expenses = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Expenses in <Text style={styles.month}>June</Text>
        </Text>
        <Text style={styles.money}>$5,091</Text>
      </View>

      <View style={styles.barContainer}>
        <View style={styles.bar1} />
        <View style={styles.bar2} />
        <View style={styles.bar3} />
        <View style={styles.bar4} />
      </View>

      <SectionList
        sections={DATA}
        scrollEnabled={false}
        keyExtractor={(item, index) => item.id + index}
        renderItem={({ item }) => <ExpensesItem key={item.id} item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionTitle}>{title}</Text>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 4 }} />}
      />
    </View>
  );
};
