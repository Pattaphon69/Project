import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  useFonts,
  Prompt_300Light,
  Prompt_500Medium,
} from '@expo-google-fonts/prompt';
import AppLoading from 'expo-app-loading';
//page
import HomeScreen from './src/Home';
import LoginScreen from './auth/login';
import SignInScreen from './auth/signin';

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    Prompt_300Light, Prompt_500Medium
  });
  if (!fontsLoaded) {
    return <View></View>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: true
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='SignUp' component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
