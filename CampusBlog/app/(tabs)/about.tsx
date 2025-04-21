import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
return (
<View style={styles.container}>
<Text> About the app</Text>
<p>building a user-friendly and functional blog app</p>
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