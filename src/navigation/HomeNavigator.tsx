import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { RootStackParamList, Routes } from '../types';
import { HomeScreen } from '../screens';
import NotificationsTabNavigator from './NotificationsTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const stackOptions: NativeStackNavigationOptions = {
  header: () => <></>,
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.HomeMain}
        component={HomeScreen}
        options={stackOptions}
      />
      <Stack.Screen
        name={Routes.Notifications}
        component={NotificationsTabNavigator}
        options={stackOptions}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
