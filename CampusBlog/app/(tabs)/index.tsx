import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CampusBlog</Text>
      
      <Link href="/about" style={styles.link}>About</Link>
      <Link href="/login" style={styles.link}>Login</Link>
      <Link href="/posts/create-post" style={styles.link}>Create a Post</Link>
      <Link href="/posts/your-post" style={styles.link}>Your Posts</Link>
      <Link href="/posts/sign-out" style={styles.link}>Sign Out</Link>
      <Link href="/posts/post-detail" style={styles.link}>Post Detail</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: '#4287f5',
    marginVertical: 5,
  },
});
