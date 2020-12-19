import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type AppParamList = {
    검색: undefined;
    저장목록: undefined;
    여행: undefined;
    메시지함: undefined;
    프로필: undefined;
    Search: undefined;
  };
export type AdditionalParamList = {
    Search: {
    };
  };
export type HomeParamList = {
    Home: {
    };
  } & AdditionalParamList;
export type HomeStackNavProps<T extends keyof HomeParamList> = {
    navigation: StackNavigationProp<HomeParamList, T>;
    route: RouteProp<HomeParamList, T>;
  };
