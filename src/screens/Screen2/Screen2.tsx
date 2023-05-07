import React from 'react';
import { Text, View } from 'react-native';
import { ScreenType } from 'src/types/screen.types';

const Screen2 = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Screen2</Text>
    </View>
  );
};

export default {
  component: Screen2,
} as ScreenType;
