import React from 'react';
import { Text, View } from 'react-native';

const NestedTest: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Nested Test</Text>
    </View>
  );
};

export default NestedTest;
