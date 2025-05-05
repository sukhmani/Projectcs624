import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import HomePage from './HomePage';
import CreatePost from './CreatePost';
import YourPost from './YourPost';
import SignOut from './SignOut';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
    <Header/>
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false, // We hide default header and use custom one
      }}
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="YourPost" component={YourPost} />
      <Stack.Screen name="SignOut" component={SignOut} />
    </Stack.Navigator>
    </NavigationIndependentTree>
  );
}