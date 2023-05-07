import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React from 'react';

export type ScreenType = {
  component: () => React.ReactElement;
  options?: NativeStackNavigationOptions;
};
