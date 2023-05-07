import { NavigatorRoute } from '@navigation';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback } from 'react';
import { bottomTabKeys } from 'src/navigation/Navigation.constants';

const useNavigationRoute = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const navigate = useCallback(
    <T extends keyof NavigatorRoute>(
      ...[screen, params]: undefined extends NavigatorRoute[T]
        ? [T]
        : [T, NavigatorRoute[T]]
    ) => {
      if (bottomTabKeys.find((tabKey) => tabKey === screen)) {
        return navigation.navigate('BottomTab', {
          screen,
          params,
        });
      }

      // TODO >> remove unknown
      navigation.navigate(screen as unknown as string, params);
    },
    [],
  );

  return {
    navigate,
  };
};

export default useNavigationRoute;
