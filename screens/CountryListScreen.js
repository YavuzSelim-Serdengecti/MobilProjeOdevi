import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CountryListScreen = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('CountryDetail', { country: item })}
    >
      <Image source={{ uri: item.flags.png }} style={styles.flag} />
      <Text style={styles.name}>{item.name.common}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ülkeler Listesi</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <FlatList
          data={countries}
          renderItem={renderItem}
          keyExtractor={(item) => item.cca3}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c2b',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a3c',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  flag: {
    width: 60,
    height: 40,
    borderRadius: 4,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ffffff',
  },
});

export default CountryListScreen;
