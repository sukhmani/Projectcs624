import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contact, setContact] = useState("");

  const handleCreatePost = () => {
    if (!title || !content || !contact) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Navigate to YourPost.tsx
    router.push("/posts/your-post");
  };

  return (
    <View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} placeholder="Enter title" value={title} onChangeText={setTitle} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Details of the post</Text>
        <TextInput style={[styles.input, styles.text]} multiline numberOfLines={4} placeholder="Enter details" value={content} onChangeText={setContent} />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Contact information</Text>
        <TextInput style={styles.input} placeholder="Enter contact information" value={contact} onChangeText={setContact} />
      </View>

      <TouchableHighlight onPress={handleCreatePost} style={styles.button}>
        <Text style={{ color: "#fff" }}>CREATE</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: { marginBottom: 30, width: "100%" },
  label: { marginBottom: 10, fontWeight: "bold", fontSize: 18, marginTop: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 4, width: "100%" },
  text: { height: 100, textAlignVertical: "top" },
  button: { backgroundColor: "#007BFF", padding: 10, borderRadius: 6, alignItems: "center", marginTop: 16 },
});
