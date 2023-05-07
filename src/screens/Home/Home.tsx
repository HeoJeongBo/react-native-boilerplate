import React from 'react';
import { Text, View } from 'react-native';
import { ScreenType } from 'src/types/screen.types';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home</Text>
    </View>
  );
};

export default {
  component: Home,
} as ScreenType;
