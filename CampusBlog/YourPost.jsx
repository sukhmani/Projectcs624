import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function YourPost() {
  const [posts, setPosts] = useState([
    { id: '1', title: 'First Post', content: 'Lorem ipsum' },
    { id: '2', title: 'Second Post', content: 'Dolor sit amet' },
    // we will connect to the database later to get the posts that the user created
  ]);

  const deletePost = (id) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this post?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", 
          onPress: () => {setPosts(posts.filter(post => post.id !== id));
        }}
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.postCard}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.content}</Text>
      <TouchableOpacity onPress={() => deletePost(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  postCard: {
    backgroundColor: '#f5f5f5',
    padding: 30,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#ff4444',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
