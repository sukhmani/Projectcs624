import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import HomePage from './HomePage';
import CreatePost from './CreatePost';
import YourPost from './YourPost';
import SignOut from './SignOut';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            header: () => <Header />, // Use the custom Header component
          }}
        />
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="YourPost" component={YourPost} />
        <Stack.Screen name="SignOut" component={SignOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}