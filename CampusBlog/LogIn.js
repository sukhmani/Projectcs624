import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function LogIn() {
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
            <Text style={styles.buttonText}>Sign up</Text>
          </LinearGradient>
        </TouchableOpacity>
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
});