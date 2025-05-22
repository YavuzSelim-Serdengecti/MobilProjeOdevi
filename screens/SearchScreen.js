import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import CountryCard from '../components/CountryCard';

const dummyCountries = [
  { name: 'Turkey', flag: 'https://flagcdn.com/w320/tr.png' },
  { name: 'Germany', flag: 'https://flagcdn.com/w320/de.png' },
  { name: 'Japan', flag: 'https://flagcdn.com/w320/jp.png' },
  { name: 'Brazil', flag: 'https://flagcdn.com/w320/br.png' },
];

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');

  const filteredCountries = dummyCountries.filter((country) =>
    country.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ülke adı yazın..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredCountries}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <CountryCard name={item.name} flag={item.flag} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
});
