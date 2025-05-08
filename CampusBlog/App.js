import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import HomePage from './HomePage';
import CreatePost from './CreatePost';
import YourPost from './YourPost';
import SignOut from './SignOut';
import { PostDetail } from './PostDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
    <Header/>
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerShown: false, 
      }}
    >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="YourPost" component={YourPost} />
      <Stack.Screen name="SignOut" component={SignOut} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
    </Stack.Navigator>
    </NavigationIndependentTree>
  );
}