import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export function PostDetail({ route }) {
  const { post } = route.params; 
  const navigation = useNavigation(); 

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={50} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.date}>{post.date}</Text>
      <Text style={styles.content}>{post.content}</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginBottom: 10,
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});