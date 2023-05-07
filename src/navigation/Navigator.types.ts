export type BottomTabNavigatorRoute = {
  BottomTab: {
    Home: undefined;
    Screen1: undefined;
    Screen2: undefined;
  };
};

export type NestedNavigatorRoute = {
  NestedTest: undefined;
};

export type NavigatorRoute = BottomTabNavigatorRoute['BottomTab'] &
  NestedNavigatorRoute;

export default NavigatorRoute;
