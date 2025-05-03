import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PostCard({ date, title }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subheader}>{date}</Text>
      </View>
      
      <View style={styles.cardContent}>
        <Text style={styles.bodyText} numberOfLines={1}>
          I'm looking for a study buddy for the upcoming exam. If you're interested, please reach out!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    maxWidth: 345,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  cardHeader: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  cardContent: {
    padding: 16,
  },
  bodyText: {
    fontSize: 14,
    color: '#666',
  },
});