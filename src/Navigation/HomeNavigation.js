import React from 'react';
import HomePage from './../Screens/HomePage/HomePage';
import DetailScreen from './../Screens/DetailScreen/DetailScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from './../components/CustomTabBar/CustomTabBar';
import MenuScreen from './../Screens/MenuScreen/MenuScreen';
import NotificationsScreen from './../Screens/NotificationsScreen/NotificationsScreen';
import UsersScreen from './../Screens/UsersScreen/UsersScreen';
import LibraryScreen from './../Screens/LibraryScreen/LibraryScreen';
import HomeHeader from '../components/HomeHeader/HomeHeader';

const Home = createBottomTabNavigator();

export const HomeNavigation = () => {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: false,
        headerTitle: props => <HomeHeader {...props} />,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Home.Screen name={'HomePage'} component={HomePage} />
      <Home.Screen name={'Library'} component={LibraryScreen} />
      <Home.Screen name={'Users'} component={UsersScreen} />
      <Home.Screen name={'Notifications'} component={NotificationsScreen} />
      <Home.Screen name={'Menu'} component={MenuScreen} />
      <Home.Screen name={'Details'} component={DetailScreen} />
    </Home.Navigator>
  );
};
