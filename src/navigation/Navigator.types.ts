export type BottomTabNavigatorRoute = {
  BottomTab: {
    Home: undefined;
    Screen1: undefined;
    Screen2: undefined;
    Screen3: {
      test: string;
    };
  };
};

export type NestedNavigatorRoute = {
  NestedTest: undefined;
  NestedTest2: {
    test: string;
  };
};

export type NavigatorRoute = BottomTabNavigatorRoute['BottomTab'] &
  NestedNavigatorRoute;

export default NavigatorRoute;
