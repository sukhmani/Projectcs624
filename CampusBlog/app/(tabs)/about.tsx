import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
return (
<View style={styles.container}>
<Text> About the app</Text>
<p>This project has been implemented and designed by using the MERN stack including React Native framework, Express, Node, MongoDB. The main purpose of this mobile app is to provide a social platform where users can interact with other students through features offered in the application. The application will include authentication, post creation, and real-time interactions. The target users are students who are currently studying or have previously studied at City University of Seattle. This project demonstrates how we apply and practice the knowledge gained in this course to build a mobile application.</p>
</View>
);
}

const styles = StyleSheet.create({
container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
},
});