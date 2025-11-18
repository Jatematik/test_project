import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParamList, Routes } from '../types';
import {
  HomeScreen,
  AnalyticsScreen,
  ChatsScreen,
  HistoryScreen,
  PaymentsScreen,
} from '../screens';
import {
  HomeIcon,
  AnalyticsIcon,
  ChatsIcon,
  HistoryIcon,
  PaymentIcon,
} from '../assets/icons';

const Tab = createBottomTabNavigator<RootStackParamList>();

const MainNavigator = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          borderTopWidth: 0,
          height: 57 + bottom,
        },
        tabBarIcon: ({ focused }) => {
          let icon = <></>;

          switch (route.name) {
            case Routes.Home:
              icon = <HomeIcon iconColor={focused ? '#FE5900' : '#FFFFFF'} />;
              break;
            case Routes.Payments:
              icon = (
                <PaymentIcon iconColor={focused ? '#FE5900' : '#FFFFFF'} />
              );
              break;
            case Routes.History:
              icon = (
                <HistoryIcon iconColor={focused ? '#FE5900' : '#FFFFFF'} />
              );
              break;
            case Routes.Analytics:
              icon = (
                <AnalyticsIcon iconColor={focused ? '#FE5900' : '#FFFFFF'} />
              );
              break;
            case Routes.Chats:
              icon = <ChatsIcon iconColor={focused ? '#FE5900' : '#FFFFFF'} />;
              break;
            default:
              break;
          }

          return icon;
        },
        tabBarLabel: ({ focused, children }) => (
          <Text
            style={{
              fontSize: 12,
              color: focused ? '#FE5900' : '#FFFFFF',
            }}
          >
            {children}
          </Text>
        ),
      })}
    >
      <Tab.Screen name={Routes.Home} component={HomeScreen} />
      <Tab.Screen name={Routes.Payments} component={PaymentsScreen} />
      <Tab.Screen name={Routes.History} component={HistoryScreen} />
      <Tab.Screen name={Routes.Analytics} component={AnalyticsScreen} />
      <Tab.Screen name={Routes.Chats} component={ChatsScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
