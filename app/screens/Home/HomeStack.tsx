import React, {
} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeParamList } from '../../types';
import Home from './Home';

interface HomeStackProps { }

const Stack = createStackNavigator<HomeParamList>();

const HomeStack: React.FC<HomeStackProps> = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        header: () => null,
      }}
    />
  </Stack.Navigator>
);
export default HomeStack;
