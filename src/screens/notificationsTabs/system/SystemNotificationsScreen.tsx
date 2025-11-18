import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../../theme/colors';

export const SystemNotificationsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
      }}
    >
      <Text
        style={{
          color: colors.white,
        }}
      >
        SystemNotificationsScreen
      </Text>
    </View>
  );
};
