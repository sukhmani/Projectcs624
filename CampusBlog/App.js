import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import CreatePost from './screens/CreatePost';
import YourPost from './screens/YourPost';
import { PostDetail } from './screens/PostDetail';
import LogIn from './screens/LogIn';
import About from './screens/About';
import SignUp from './screens/SignUp';
import { View } from 'react-native';


const Stack = createStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);

  
  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        console.log("token ", token)
        setInitialRoute(token ? 'HomePage' : 'LogIn');
      } catch (e) {
        console.error('Error checking token', e);
        setInitialRoute('LogIn');
      }
    };

    checkToken();
  }, []);

  if (!initialRoute) return null;

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false, 
      }}
      >
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="YourPost" component={YourPost} />
      <Stack.Screen name="PostDetail" component={PostDetail} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="SignUp" component={SignUp} />      
    </Stack.Navigator>
  );
}
