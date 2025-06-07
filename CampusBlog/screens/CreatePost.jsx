import React, { useState } from 'react';
import config from '../config';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native';
import Header from '../Header';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleCreatePost = async () => {
    setError('');
    // Validate inputs
    if (!title.trim() || !content.trim()) {
      setError('All fields are required');
      return;
    }
    setIsLoading(true);
    try {
      // Get token from storage
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        setError('Please login to create a post');
        setIsLoading(false);
        return;
      }

      // Make API call
      const response = await fetch(`${config.API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim()
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create post');
      }

      // Reset form and navigate back
      setTitle('');
      setContent('');
      navigation.navigate('YourPost');// Redirect to your post screen

    } catch (err) {
      setError(err.message || 'Failed to create post');
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Details of the post</Text>
          <TextInput
            style={[styles.input, styles.text]}
            multiline
            numberOfLines={4}
            placeholder="Enter details"
            value={content}
            onChangeText={setContent}
          />
        </View> 
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : null}

        <TouchableHighlight 
          onPress={handleCreatePost}
          disabled={isLoading}
        >
           <LinearGradient 
             colors={['#FF6DB0', '#FF90B3']} 
             style={[
               styles.gradientButton,
               isLoading && styles.disabledButton
             ]}
           >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>
                  CREATE
                </Text>
              )}
            </LinearGradient>
        </TouchableHighlight>

      
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  inputGroup: {
    marginBottom: 30,
    width: '100%'
  },
  label: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    paddingLeft: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 4,
    width: '90%',
    paddingLeft: 30,
  },
  text: {
    height: 100,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 16
  },
  gradientButton: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 25,
  },
   buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.7,
  },
});
