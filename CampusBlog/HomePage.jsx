import React, { useEffect } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Post from './Post'
import { useNavigation } from '@react-navigation/native'



function HomePage() {
    const [postList, setPostList] = React.useState([])
    const navigation = useNavigation(); 
    useEffect(()=>{
        setPostList([
            {date: '2023-10-01', title: 'Study Buddy Needed', content: 'Looking for someone to study with for the upcoming exam.'},
            {date: '2023-10-02', title: 'Looking for a group project partner', content: 'I need a partner for my group project in CS624. Anyone interested?'},
            {date: '2023-10-03', title: 'Anyone interested in a study group for CS624?', content: 'I am looking for a study group for CS624. Anyone interested?'},
            {date: '2023-10-03', title: 'Anyone interested in a study group for CS624?', content: 'I am looking for a study group for CS624. Anyone interested?'},
            {date: '2023-10-05', title: 'title 2', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
            {date: '2023-10-07', title: 'title 3?', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. '},
            {date: '2023-10-08', title: 'anyone?', content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'},  
        ])},[])
    
  return (
    <ScrollView>
        <View>
       
            {postList.map((post, id) => (
                <TouchableOpacity
                key={id} onPress={() => navigation.navigate('PostDetail', { post })}>
                <Post key={id} date={post.date} title={post.title} content={post.content} />
                </TouchableOpacity>

            ))}
        </View>
    </ScrollView>
  )
}

export default HomePage