import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const pages = [
  { label: 'Home', route: 'Homepage' },
  { label: 'Create Post', route: 'CreatePost' },
  { label: 'Your Post', route: 'YourPost' },
  { label: 'Sign Out', route: 'SignOut' },
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

  return (
    <View style={styles.appBar}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleToggleMenu}>
          <Ionicons name="menu" size={40} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>CityU BLOG</Text>
      </View>

      <Modal
        visible={menuVisible}
        transparent
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setMenuVisible(false)}
          activeOpacity={1}
        >
          <View style={styles.dropdown}>
            {pages.map((page) => (
              <TouchableOpacity key={page.route} onPress={() => handleNavigate(page.route)}>
                <Text style={styles.dropdownText}>{page.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#7b1113',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
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
