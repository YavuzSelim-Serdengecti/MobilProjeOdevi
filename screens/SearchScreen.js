import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setFilteredCountries(data);
      });
  }, []);

  useEffect(() => {
    const filtered = countries.filter(country =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchQuery]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('CountryDetail', { country: item })}
    >
      <Image source={{ uri: item.flags.png }} style={styles.flag} />
      <Text style={styles.countryName}>{item.name.common}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Ara..."
          placeholderTextColor="#ccc"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredCountries}
        renderItem={renderItem}
        keyExtractor={(item) => item.cca3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c2b',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#1e1e3f',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    color: '#fff',
    fontSize: 18,
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e3f',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  flag: {
    width: 50,
    height: 30,
    marginRight: 15,
    borderRadius: 4,
  },
  countryName: {
    color: '#fff',
    fontSize: 16,
  },
});
