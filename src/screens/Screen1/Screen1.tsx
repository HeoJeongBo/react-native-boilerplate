import React from 'react';
import { Text, View } from 'react-native';
import { ScreenType } from 'src/types/screen.types';

const Screen1: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Screen1</Text>
    </View>
  );
};

export default {
  component: Screen1,
} as ScreenType;
