import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import {
  AllNotificationsScreen,
  DeliveryNotificationsScreen,
  PaymentsNotificationsScreen,
  SystemNotificationsScreen,
  TravelNotificationsScreen,
} from '../screens';
import { MainHeader } from '../components';
import { TabBar } from './components';

const renderScene = SceneMap({
  all: AllNotificationsScreen,
  payments: PaymentsNotificationsScreen,
  system: SystemNotificationsScreen,
  delivery: DeliveryNotificationsScreen,
  travel: TravelNotificationsScreen,
});

const routes = [
  { key: 'all', title: 'All' },
  { key: 'payments', title: 'Payments' },
  { key: 'system', title: 'System' },
  {
    key: 'delivery',
    title: 'Delivery',
  },
  { key: 'travel', title: 'Travel' },
];

export default function NotificationsTabNavigator() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <>
      <MainHeader title="Notifications" />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => <TabBar props={props} setIndex={setIndex} />}
      />
    </>
  );
}
