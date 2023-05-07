import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Home, NestedTest } from '@screens';
import BottomTabNavigator from './BottomTabNavigator';
import { getStackScreens } from 'src/utils/screen.utils';

const Stack = createNativeStackNavigator();

const RootNavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
        {getStackScreens().map((stackScreen) => {
          return (
            <Stack.Screen
              name={stackScreen.key}
              key={stackScreen.key}
              component={stackScreen.component}
              options={stackScreen.options}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigationContainer;
