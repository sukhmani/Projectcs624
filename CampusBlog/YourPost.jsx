import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';

export default function YourPost() {
  const [posts, setPosts] = useState([
    { id: '1', title: 'First Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.' },
    { id: '2', title: 'Second Post', content: 'Dolor sit amet, consectetur adipiscing elit. Integer nec odio.' },
  ]);
  
  const [editingPost, setEditingPost] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const deletePost = (id) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this post?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", 
          onPress: () => setPosts(posts.filter(post => post.id !== id)),
        },
      ]
    );
  };

  const startEditing = (post) => {
    setEditingPost(post);
    setNewTitle(post.title);
    setNewContent(post.content);
  };

  const saveEdit = () => {
    const updatedPosts = posts.map(post => 
      post.id === editingPost.id ? { ...post, title: newTitle, content: newContent } : post
    );
    setPosts(updatedPosts);
    setEditingPost(null);
    setNewTitle('');
    setNewContent('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.postCard}>
      {editingPost && editingPost.id === item.id ? (
        <View>
          <TextInput
            value={newTitle}
            onChangeText={setNewTitle}
            style={styles.input}
            placeholder="Edit Title"
          />
          <TextInput
            value={newContent}
            onChangeText={setNewContent}
            style={styles.input}
            placeholder="Edit Content"
          />
          <TouchableOpacity onPress={saveEdit} style={styles.saveButton}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.contentContainer}>
            <Text style={styles.content}>{item.content.slice(0, 30)}{item.content.length > 30 ? '...' : ''}</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => startEditing(item)} style={styles.editButton}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deletePost(item.id)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
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
    padding: 20,
    marginBottom: 12,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contentContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  content: {
    flex: 1, 
    marginBottom: 8,
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginLeft: 10,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#2196F3',  
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  editText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  saveText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    marginLeft: 10,
  },
});
