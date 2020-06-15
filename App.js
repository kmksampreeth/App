import React, { Component } from 'react';
import {StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack'
import Home from './HomeScreen';
import Health from './HealthScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator  >
        <Stack.Screen name="Home" component={Home} options={{ headerShown:false }} />
        <Stack.Screen name="Health" component={Health} options={{ headerShown:false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
