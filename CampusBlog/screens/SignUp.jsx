import React, { useState } from 'react'; 
import config from '../config';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function SignUp({ navigation }) {
  // Added state for input fields and loading
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');  
  
  // Added async signup handler
  const handleSignUp = async () => {
    if (!username || !password || !confirmPassword) {
      setError("Please fill out all fields")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }
    setError('')
    setLoading(true);

    try {
      const response = await fetch(`${config.API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }
      Alert.alert('Sign Up Successful', 'You have signed up successfully.');

      navigation.navigate('LogIn');
    } catch (err) {
      Alert.alert('Sign up fail', err.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FF6DB0', '#FF90B3']} style={styles.topSection}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>CityU</Text>
            <Text style={styles.comingText}>Blog</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Please enter an username"
          placeholderTextColor="#ccc"
          style={styles.input}
          value={username}           
          onChangeText={setUsername} 
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Please enter a password"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
          value={password}           
          onChangeText={setPassword} 
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          placeholder="Please confirm your password"
          placeholderTextColor="#ccc"
          secureTextEntry
          style={styles.input}
          value={confirmPassword}           
          onChangeText={setConfirmPassword} 
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity
          style={styles.button}
          onPress={handleSignUp} 
          disabled={loading}   
        >
          <LinearGradient colors={['#FF6DB0', '#FF90B3']} style={styles.gradientButton}>
            <Text style={styles.buttonText}>
              {loading ? 'Signing up...' : 'Sign up'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
            <Text style={styles.switchLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Your existing styles remain unchanged
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
   errorText: {
    color: 'red',
    marginBottom: 10,
    fontWeight: '600',
  },
});
