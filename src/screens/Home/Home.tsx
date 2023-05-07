import React from 'react';
import { Text, View } from 'react-native';

const Home: React.FC = () => {
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

export default React.memo(Home);
