import React from 'react';
import _ from 'lodash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  AntDesign, Ionicons, EvilIcons, Feather,
} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { AppParamList } from './types';
import HomeStack from './screens/Home/HomeStack';

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

const AppTabs: React.FC<AppTabsProps> = () => (
  <NavigationContainer>
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = 'home';
          if (_.isEqual(route.name, '검색')) {
            return <AntDesign name="home" size={size} color={color} />;
          }
          if (_.isEqual(route.name, '저장목록')) {
            return <EvilIcons name="heart" size={size} color={color} />;
          }
          if (_.isEqual(route.name, '여행')) {
            return <Ionicons name="ios-airplane" size={size} color={color} />;
          }
          if (_.isEqual(route.name, '메시지함')) {
            return <Feather name="message-square" size={size} color={color} />;
          }
          if (_.isEqual(route.name, '프로필')) {
            return <EvilIcons name="user" size={size} color={color} />;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'pink',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name="검색" component={HomeStack} />
      <Tabs.Screen name="저장목록" component={HomeStack} />
      <Tabs.Screen name="여행" component={HomeStack} />
      <Tabs.Screen name="메시지함" component={HomeStack} />
      <Tabs.Screen name="프로필" component={HomeStack} />
    </Tabs.Navigator>
  </NavigationContainer>
);
export default AppTabs;
// export { default } from './storybook';
