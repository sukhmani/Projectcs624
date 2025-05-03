import React from 'react'
import { Text, View } from 'react-native'
import Header from './Header'
import Post from './Post'

function HomePage() {
  return (
    <View>
        <Header/>
        <Text>Homepage</Text>
        <Post/>
    </View>
  )
}

export default HomePage