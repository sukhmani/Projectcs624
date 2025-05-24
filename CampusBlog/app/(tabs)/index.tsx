import { StyleSheet, Text, View } from 'react-native';
import {Link} from "expo-router"

export default function App() {
  return (
  <View>
  <Text>  Welcome to CampusBlog</Text>
  <Link href={"/about"}>About</Link>
  <Link href={"/login"}>Login</Link>
  <Link href={"../posts/create-post"}>Create a Post</Link>
  <Link  href="/posts/your-post">Your Posts</Link>
  <Link  href="/posts/sign-out"> Sign Out</Link>
  <Link  href="/posts/post-detail">Post Detail</Link>
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