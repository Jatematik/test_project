import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParamList, Routes } from '../types';
import {
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
import HomeNavigator from './HomeNavigator';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator<RootStackParamList>();

const MainNavigator = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName={Routes.Home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopWidth: 0,
          height: 57 + bottom,
        },
        tabBarIcon: ({ focused }) => {
          let icon = <></>;

          switch (route.name) {
            case Routes.Home:
              icon = (
                <HomeIcon iconColor={focused ? colors.medium : colors.white} />
              );
              break;
            case Routes.Payments:
              icon = (
                <PaymentIcon
                  iconColor={focused ? colors.medium : colors.white}
                />
              );
              break;
            case Routes.History:
              icon = (
                <HistoryIcon
                  iconColor={focused ? colors.medium : colors.white}
                />
              );
              break;
            case Routes.Analytics:
              icon = (
                <AnalyticsIcon
                  iconColor={focused ? colors.medium : colors.white}
                />
              );
              break;
            case Routes.Chats:
              icon = (
                <ChatsIcon iconColor={focused ? colors.medium : colors.white} />
              );
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
              color: focused ? colors.medium : colors.white,
            }}
          >
            {children}
          </Text>
        ),
      })}
    >
      <Tab.Screen name={Routes.Home} component={HomeNavigator} />
      <Tab.Screen name={Routes.Payments} component={PaymentsScreen} />
      <Tab.Screen name={Routes.History} component={HistoryScreen} />
      <Tab.Screen name={Routes.Analytics} component={AnalyticsScreen} />
      <Tab.Screen name={Routes.Chats} component={ChatsScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigator;
