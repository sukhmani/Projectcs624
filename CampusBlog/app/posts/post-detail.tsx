import React from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Define the type for your route parameters
type Post = {
  title: string;
  date: string;
  content: string;
};

type RootStackParamList = {
  PostDetail: { post: Post };
  // Add other screens here if needed
};

type PostDetailRouteProp = RouteProp<RootStackParamList, 'PostDetail'>;

interface PostDetailProps {
  route: PostDetailRouteProp;
}

export function PostDetail({ route }: PostDetailProps) {
  const { post } = route.params;
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={50} color="#000" />
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
