import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
return (
<View style={styles.container}>
<Text> Login</Text>

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