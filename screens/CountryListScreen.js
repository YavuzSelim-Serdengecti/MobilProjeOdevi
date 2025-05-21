import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const mockCountries = [
  {
    name: 'Türkiye',
    flag: 'https://flagcdn.com/w320/tr.png',
  },
  {
    name: 'Almanya',
    flag: 'https://flagcdn.com/w320/de.png',
  },
  {
    name: 'Fransa',
    flag: 'https://flagcdn.com/w320/fr.png',
  },
];

const CountryListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockCountries}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.flag }} style={styles.flag} />
            <Text style={styles.countryName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, marginTop:30, backgroundColor: '#fff' },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
  },
  flag: {
    width: 60,
    height: 40,
    borderRadius: 4,
    marginRight: 16,
  },
  countryName: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CountryListScreen;
