/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Provider } from 'react-redux'
import type { FC } from 'react';
import {
  Colors,
  setI18nConfig,
  translate
} from "../src/config";
import type { StackParamList } from "./routes.types";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

import SplashScreen from './screens/SplashScreen/index'

const App: FC = () => {
  setI18nConfig();
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator<StackParamList>();
  const navigationRef = useNavigationContainerRef();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>     
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer ref={navigationRef} >
          <Stack.Navigator
            initialRouteName="SplashScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      </PersistGate>
    </Provider>

  );
};

export default App;
