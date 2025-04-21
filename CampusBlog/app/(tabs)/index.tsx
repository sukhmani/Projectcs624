import { StyleSheet, Text, View } from 'react-native';
import {Link} from "expo-router"

export default function App() {
  return (
  <View>
  <Text>  Welcome to CampusBlog</Text>
  <Link href={"/about"}>go to About</Link>
  </View>
  );
  }
  
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  });