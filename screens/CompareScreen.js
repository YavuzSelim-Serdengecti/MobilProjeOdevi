import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function CompareScreen() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  const getRandomCountries = () => {
    const shuffled = [...countries].sort(() => 0.5 - Math.random());
    setSelectedCountries(shuffled.slice(0, 2));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={getRandomCountries}>
        <Text style={styles.buttonText}>İki Ülke Karşılaştır</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.cardContainer}>
        {selectedCountries.map((country, index) => (
          <View key={index} style={styles.countryCard}>
            <Image source={{ uri: country.flags.png }} style={styles.flag} />
            <Text style={styles.countryName}>{country.name.common}</Text>
            <Text style={styles.infoText}>Başkent: {country.capital?.[0] || 'Yok'}</Text>
            <Text style={styles.infoText}>Nüfus: {country.population.toLocaleString()}</Text>
            <Text style={styles.infoText}>Bölge: {country.region}</Text>
            <Text style={styles.infoText}>Para Birimi: {Object.values(country.currencies || {})[0]?.name || 'Bilinmiyor'}</Text>
            <Text style={styles.infoText}>Dil: {Object.values(country.languages || {})[0] || 'Bilinmiyor'}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c2b',
    alignItems: 'center',
    paddingTop: 60,
  },
  button: {
    backgroundColor: '#2e2e5e',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  cardContainer: {
    paddingBottom: 40,
    paddingHorizontal: 10,
  },
  countryCard: {
    backgroundColor: '#1e1e3f',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    width: 330,
    alignSelf: 'center',
  },
  flag: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  countryName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  infoText: {
    color: '#f0f0f0',
    fontSize: 16,
    marginBottom: 4,
  },
});
