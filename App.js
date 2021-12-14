import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from './navigation/BottomNavigation';
import ResultScreen from './screens/ResultScreen';
import DailyScreen from './screens/DailyScreen';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator screenOptions={{ headerShown: false,}}>
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          <Stack.Screen name="ResultScreen" component={ResultScreen} />
          <Stack.Screen name="DailyScreen" component={DailyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}
