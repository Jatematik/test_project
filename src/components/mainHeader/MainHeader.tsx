import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BackIcon, MessageIcon } from '../../assets/icons';
import { styles } from './MainHeader.styles';

interface MainHeaderProps {
  title: string;
}

export const MainHeader = ({ title }: MainHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
        <BackIcon />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.button}>
        <MessageIcon />
      </TouchableOpacity>
    </View>
  );
};
