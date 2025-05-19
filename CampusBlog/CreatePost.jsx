import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';

export default function CreatePost() {
  return (
    
      <View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter title"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Details of the post</Text>
          <TextInput
            style={[styles.input, styles.text]}
            multiline
            numberOfLines={4}
            placeholder="Enter details"
          />

          
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contact information</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter contact information"
          />
        </View>
        <TouchableHighlight>
          <View style={styles.button}>
            <Text style={{ color: '#fff' }}>CREATE</Text>
          </View>
        </TouchableHighlight>

      
     </View>
  );
}

const styles = StyleSheet.create({
  
  inputGroup: {
    marginBottom: 30,
    width: '100%'
  },
  label: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    paddingLeft: 30,

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 20,
    borderRadius: 4,
    width: '90%',
    paddingLeft: 30,
  },
  text: {
    height: 100,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 16
  },
});
