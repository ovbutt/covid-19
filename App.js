import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Updates from './src/views/Updates';
import Helplines from './src/views/Helplines';
import Splash from './src/views/Splash';
import Home from './src/views/Home';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from './src/helpers/Colors';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabNavigator = () => (
  <Tab.Navigator
    sceneAnimationEnabled
    shifting
    screenOptions={{tabBarColor: Colors.gray}}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <Icon
            name="clinic-medical"
            color={Colors.white}
            style={{fontSize: 22}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Updates"
      component={Updates}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: () => (
          <Icon name="fire-alt" color={Colors.white} style={{fontSize: 22}} />
        ),
      }}
    />
    <Tab.Screen
      name="Helplines"
      component={Helplines}
      options={{
        tabBarLabel: 'Helplines',
        tabBarIcon: () => (
          <Icon
            name="hospital-symbol"
            color={Colors.white}
            style={{fontSize: 22}}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppStackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Tab" component={HomeTabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default class App extends Component {
  render() {
    return <AppStackNavigator />;
  }
}
