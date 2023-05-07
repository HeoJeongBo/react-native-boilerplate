import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { getBottomTabScreens } from 'src/utils/screen.utils';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {getBottomTabScreens().map((bottomTabScreen) => (
        <Tab.Screen
          key={bottomTabScreen.key}
          name={bottomTabScreen.key}
          component={bottomTabScreen.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
