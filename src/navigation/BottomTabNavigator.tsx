import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Screen1, Screen2 } from '@screens';
import React from 'react';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home.component} />
      <Tab.Screen name="Screen1" component={Screen1.component} />
      <Tab.Screen name="Screen2" component={Screen2.component} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
