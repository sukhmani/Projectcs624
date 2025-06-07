import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const pages = [
  { label: 'Home', route: 'HomePage' },
  { label: 'Create Post', route: 'CreatePost' },
  { label: 'Your Post', route: 'YourPost' },
  { label: 'About Us', route: 'About' },
];

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleNavigate = (route) => {
    setMenuVisible(false);
    navigation.navigate(route);
  };
   const handleSignOut = async () => {
    await AsyncStorage.removeItem('userToken'); // remove the token

    navigation.reset({
      index: 0,
      routes: [{ name: 'LogIn' }],
    });
  };
  return (
    <LinearGradient
      colors={['#FF6DB0', '#FF90B3']}
      style={styles.appBar}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleToggleMenu}>
          <Ionicons name="menu" size={36} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
          <Text style={styles.title}>CityU BLOG</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setMenuVisible(false)}
          activeOpacity={1}
        >
          <View style={styles.dropdown}>
            {pages.map((page) => (
              <TouchableOpacity
                key={page.route}
                onPress={() => handleNavigate(page.route)}
              >
                <Text style={styles.dropdownText}>{page.label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
                key={"SignOut"}
                onPress={() => handleSignOut()}
              >
                <Text style={styles.dropdownText}>Sign out</Text>
              </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  appBar: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    marginLeft: 16,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  dropdown: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 40,
    borderRadius: 10,
  },
  dropdownText: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
    color: '#333',
  },
});

export default Header;
