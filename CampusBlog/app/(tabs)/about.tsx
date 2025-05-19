import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>About the App</Text>
      <Text style={styles.paragraph}>
        This project has been implemented and designed using the MERN stack including React Native, Express, Node.js, and MongoDB.
        The main purpose of this mobile app is to provide a social platform where users can interact with other students through features
        such as authentication, post creation, and real-time interactions.
      </Text>
      <Text style={styles.paragraph}>
        The target users are students currently studying or who have previously studied at City University of Seattle.
        This project demonstrates how we apply and practice the knowledge gained in this course to build a mobile application.
      </Text>

      <Text style={styles.subheading}>Meet the Team</Text>

      <View style={styles.member}>
        <Image source={require('../(tabs)/user.png')} style={styles.image} />
        <Text style={styles.name}>Sai Mani Ritish Upadhyayula</Text>
        <Text style={styles.role}>City University Student</Text>
      </View>

      <View style={styles.member}>
        <Image source={require('../(tabs)/Sukhmani.png')} style={styles.image} />
        <Text style={styles.name}>Sukhmani Thukral</Text>
        <Text style={styles.role}>City University Student</Text>
      </View>

      <View style={styles.member}>
        <Image source={require('../(tabs)/Yen.png')} style={styles.image} />
        <Text style={styles.name}>Yen Hai Tran</Text>
        <Text style={styles.role}>City University Student</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 15,
    lineHeight: 22,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 75,
    marginBottom: 10,
  },
  member: {
    alignItems: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  role: {
    fontSize: 14,
    color: 'gray',
  },
});
