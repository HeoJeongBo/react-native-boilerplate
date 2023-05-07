import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Home, NestedTest } from '@screens';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="NestedTest" component={NestedTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigationContainer;
