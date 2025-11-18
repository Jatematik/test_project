import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './ExpensesItem.styles';

interface ExpensesItemProps {
  item: {
    id: string;
    avatar: any;
    name: string;
    cash: string;
    purpose: string;
    date: string;
    circle: 'high' | 'medium' | 'low';
  };
}

const colors = {
  high: '#CC3F02',
  medium: '#FE5900',
  low: '#FF9332',
};

export const ExpensesItem = ({ item }: ExpensesItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={item.avatar} />
        <View style={styles.textWrapper}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.purposeWrapper}>
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: colors[item.circle],
                },
              ]}
            />
            <Text style={styles.purpose}>{item.purpose}</Text>
          </View>
        </View>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.cash}>{item.cash}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
};
