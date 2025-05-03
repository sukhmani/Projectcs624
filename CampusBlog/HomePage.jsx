import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Header from './Header'
import Post from './Post'


function HomePage() {
    const [postList, setPostList] = React.useState([])
    useEffect(()=>{
        setPostList([
            {date: '2023-10-01', title: 'Study Buddy Needed', content: 'Looking for someone to study with for the upcoming exam.'},
            {date: '2023-10-02', title: 'Looking for a group project partner', content: 'I need a partner for my group project in CS624. Anyone interested?'},
            {date: '2023-10-03', title: 'Anyone interested in a study group for CS624?', content: 'I am looking for a study group for CS624. Anyone interested?'},
            {date: '2023-10-03', title: 'Anyone interested in a study group for CS624?', content: 'I am looking for a study group for CS624. Anyone interested?'},
        ])},[])
    
  return (
    <View>
        <Header/>
        <Text>Homepage</Text>
        {postList.map((post, index) => (
            <Post key={index} date={post.date} title={post.title} content={post.content} />
        ))}
    </View>
  )
}

export default HomePage