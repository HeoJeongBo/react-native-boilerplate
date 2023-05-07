import * as stackScreens from '@screens';
import { typedObjectKeys } from './js.utils';
import { bottomTabKeys } from 'src/navigation/Navigation.constants';

export const getStackScreens = () => {
  const stackScreenKeys = typedObjectKeys(stackScreens);

  return stackScreenKeys.map((screenKey) => {
    return {
      key: screenKey,
      component: stackScreens[screenKey].component,
      options: stackScreens[screenKey].options,
    };
  });
};

export const getBottomTabScreens = () => {
  return bottomTabKeys.map((bottomTabKey) => {
    return {
      key: bottomTabKey,
      component: stackScreens[bottomTabKey].component,
      options: stackScreens[bottomTabKey].options,
    };
  });
};
