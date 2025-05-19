import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function AboutScreen() {
return (
  <ScrollView contentContainerStyle={styles.container}>
<View style={styles.container}>
<Text style={styles.heading}> About the app</Text>
This project has been implemented and designed by using the MERN stack including React Native framework, Express, Node, MongoDB. The main purpose of this mobile app is to provide a social platform where users can interact with other students through features offered in the application. The application will include authentication, post creation, and real-time interactions. The target users are students who are currently studying or have previously studied at City University of Seattle. This project demonstrates how we apply and practice the knowledge gained in this course to build a mobile application.
<Image source={require('../(tabs)/user.png')} style={styles.image}>

</Image>
<Text>Sai Mani Ritish Upadhyayula</Text>
<Text>Sai is a City University Student</Text>
<Image source={require('../(tabs)/Sukhmani.png')} style={styles.image}>

</Image>
<Text>Sukhmani Thukral</Text>
<Image source={require('../(tabs)/Yen.png')} style={styles.image}>

</Image>
<Text>Yen Hai Tran</Text>
</View>
</ScrollView>
);
}

const styles = StyleSheet.create({
container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'flex-start',
	justifyContent: 'center',
},
 image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
   
  },
  heading: {
fontSize: 26,
fontWeight: 'bold',
marginBottom: 20,
textAlign: 'center'
  },
});