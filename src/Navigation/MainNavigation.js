import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigation} from './HomeNavigation';
import IntroScreen from './../Screens/IntroScreen/IntroScreen';

const Main = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Main.Screen name={'Intro'} component={IntroScreen} />
        <Main.Screen name={'Home'} component={HomeNavigation} />
      </Main.Navigator>
    </NavigationContainer>
  );
};
