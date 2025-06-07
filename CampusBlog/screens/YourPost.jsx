import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, Platform } from 'react-native';
import Header from '../Header';
import config from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function YourPost() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const fetchMyPosts = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        setError('Please login to view your posts'); // Should not have this case though but just to make sure
        setIsLoading(false);
        return;
      }

      const response = await fetch(`${config.API_URL}/posts/myposts`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch posts');
      }

      setPosts(data);
    } catch (err) {
      setError(err.message || 'Failed to load posts');
      console.error('Error fetching posts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  const deletePost = async (id) => {
    // I use Platform here because Alert.alert does not show anything on web and I use web browser mostly during development
    const confirmDelete = Platform.select({
      web: () => Promise.resolve(window.confirm("Are you sure you want to delete this post?")),
      default: () => new Promise((resolve) => {
        Alert.alert(
          "Confirm Delete",
          "Are you sure you want to delete this post?",
          [
            { text: "Cancel", style: "cancel", onPress: () => resolve(false) },
            { text: "Delete", style: "destructive", onPress: () => resolve(true) },
          ],
          { cancelable: false }
        );
      }),
    });

    const shouldDelete = await confirmDelete();
    
    if (shouldDelete) {
      try {
        const token = await AsyncStorage.getItem('userToken');
        const response = await fetch(`${config.API_URL}/posts/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to delete post');
        }

        setPosts(posts.filter(post => post._id !== id));
      } catch (err) {
        setError('Failed to delete post. Please try again.');
      }
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.postCard}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>{item.content.slice(0, 100)}{item.content.length > 100 ? '...' : ''}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
              onPress={() => navigation.navigate('CreatePost', { post: item, isEditing: true })} 
              style={styles.editButton}
            >
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => deletePost(item._id)} 
              style={styles.deleteButton}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header/>
      {isLoading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#FF6DB0" />
        </View>
      ) : error ? (
        <View style={styles.centered}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity onPress={fetchMyPosts} style={styles.retryButton}>
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : posts.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.noPostsText}>You haven't created any posts yet</Text>
        </View>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={item => item._id}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          onRefresh={fetchMyPosts}
          refreshing={isLoading}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 30,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#FF6DB0',
    padding: 10,
    borderRadius: 5,
  },
  retryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  noPostsText: {
    fontSize: 16,
    color: '#666',
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
