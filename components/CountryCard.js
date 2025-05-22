import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CountryCard({ country }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('CountryDetail', { country })}
    >
      <Image source={{ uri: country.flags?.png || country.flag }} style={styles.flag} />
      <Text style={styles.name}>{country.name?.common || country.name}</Text>
    </TouchableOpacity>
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
