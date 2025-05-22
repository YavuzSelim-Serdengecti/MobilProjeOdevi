// components/CountryCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CountryCard({ name, flag }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: flag }} style={styles.flag} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  flag: {
    width: 60,
    height: 40,
    marginRight: 15,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
});
