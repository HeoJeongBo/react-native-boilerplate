import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@screens';
import React from 'react';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
