import * as React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { RootStackParamList, Routes } from '../types';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const stackOptions: NativeStackNavigationOptions = {
  header: () => <></>,
};

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Main}
        component={MainNavigator}
        options={stackOptions}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
