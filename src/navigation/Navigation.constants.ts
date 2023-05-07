import { typedObjectKeys } from 'src/utils/js.utils';
import { BottomTabNavigatorRoute } from './Navigator.types';
import * as screens from '@screens';

export const BOTTOM_TABS: Record<
  keyof BottomTabNavigatorRoute['BottomTab'],
  true
> = {
  Home: true,
  Screen1: true,
  Screen2: true,
  Screen3: true,
};

export const bottomTabKeys = typedObjectKeys(BOTTOM_TABS);
