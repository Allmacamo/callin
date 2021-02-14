import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  HomeScreen,
  LaunchScreen,
  LoginScreen,
  OnboardingScreen,
  ProfileScreen,
  RecentScreen,
  RegisterScreen
} from '../../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons } from '..';
import { Colors } from '../Colors';

const AppNavigation = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  // Intenionally removing the header on screens
  const noHeader = { header: () => null };

  /**
   * Returns an icon for the bottom tab
   * @param name name of the icon
   * @param focused whether focused or no, will highlight the icon if focused
   */
  const returnTabBarIcon = (name: string, focused: boolean) => {
    return <Icons name={name} color={focused ? Colors.primary : undefined} />;
  };

  // Default tabs for the home screen
  const HomeTabs = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{ activeTintColor: Colors.primary }}
        initialRouteName="Home">
        <Tab.Screen
          name="Recent"
          component={RecentScreen}
          options={{
            tabBarIcon: (props) => returnTabBarIcon('bars', props.focused)
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: (props) => returnTabBarIcon('home', props.focused)
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: (props) => returnTabBarIcon('user', props.focused)
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen" initialRouteName="Launch">
        <Stack.Screen
          name="Launch"
          component={LaunchScreen}
          options={noHeader}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={noHeader}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={noHeader}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={noHeader}
        />
        <Stack.Screen name="Home" component={HomeTabs} options={noHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
