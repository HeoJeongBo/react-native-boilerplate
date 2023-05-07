import * as stackScreens from '@screens';
import { typedObjectKeys } from './js.utils';

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
