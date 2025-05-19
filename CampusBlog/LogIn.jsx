import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function LogIn({ navigation }) {
  return (
    <View style={styles.container}>
      
      <LinearGradient
        colors={['#FF6DB0', '#FF90B3']}
        style={styles.topSection}
      >
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>CityU</Text>
            <Text style={styles.comingText}>Blog</Text>
          </View>
        </View>
      </LinearGradient>

      
      <View style={styles.formContainer}>
        <Text style={styles.label}>UserName</Text>
        <TextInput
          placeholder="Please enter an username"
          placeholderTextColor="#ccc"
          style={styles.input}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Please enter a password"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <LinearGradient
            colors={['#FF6DB0', '#FF90B3']}
            style={styles.gradientButton}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.switchLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe9f0',
  },
  topSection: {
    height: 250,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoCircle: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF6DB0',
  },
  comingText: {
    fontSize: 12,
    color: '#FF6DB0',
  },
  formContainer: {
    padding: 30,
  },
  label: {
    fontSize: 20,
    color: '#FF6DB0',
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 20,
    color: '#000',
  },
  button: {
    marginTop: 20,
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 3,
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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
  },
  switchText: {
    color: '#888',
    fontSize: 15,
  },
  switchLink: {
    color: '#FF6DB0',
    fontWeight: 'bold',
    fontSize: 15,
  },
});