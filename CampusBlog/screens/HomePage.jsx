import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import config from '../config'
import Post from './Post'
import { useNavigation } from '@react-navigation/native'
import Header from '../Header'

function HomePage() {
    const [postList, setPostList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const navigation = useNavigation()

    const fetchPosts = async () => {
        try {
            setIsLoading(true)
            setError('')
            const response = await fetch(`${config.API_URL}/posts`)
            const data = await response.json()
            
            if (!response.ok) {
                throw new Error(data.message || 'Failed to fetch posts')
            }

            setPostList(data)
        } catch (err) {
            setError('Failed to fetch posts. Please try again later.')
            console.error('Error fetching posts:', err)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])
  return (
    <View style={styles.container}>
      <Header/>    
      <ScrollView 
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          overScrollMode="auto"
          showsVerticalScrollIndicator={true}>
          {isLoading ? (
            <View style={styles.centered}>
              <ActivityIndicator size="large" color="#FF6DB0" />
            </View>
          ) : error ? (
            <View style={styles.centered}>
              <Text style={styles.errorText}>{error}</Text>
              <TouchableOpacity onPress={fetchPosts} style={styles.retryButton}>
                <Text style={styles.retryText}>Retry</Text>
              </TouchableOpacity>
            </View>
          ) : postList.length === 0 ? (
            <View style={styles.centered}>
              <Text style={styles.noPostsText}>No posts yet</Text>
            </View>
          ) : (
            <View style={styles.postsContainer}>
              {postList.map((post) => (
                <TouchableOpacity
                  key={post._id}
                  onPress={() => navigation.navigate('PostDetail', { post })}>
                  <Post 
                    date={new Date(post.date).toLocaleDateString()} 
                    title={post.title} 
                    content={post.content}
                    author={post.owner.username} 
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  postsContainer: {
    padding: 10,
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
});
export default HomePage