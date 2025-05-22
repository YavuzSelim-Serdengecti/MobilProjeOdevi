import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CountryCard({ country }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: country.flags.png }} style={styles.flag} />
      <Text style={styles.name}>{country.name.common}</Text>
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
  },
  flag: {
    width: 50,
    height: 30,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
  },
});
