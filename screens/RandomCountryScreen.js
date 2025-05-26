import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function RandomCountryScreen({ navigation }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, []);

  const getRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setSelectedCountry(countries[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={getRandomCountry}>
        <Text style={styles.buttonText}>Rastgele Ülke Seç</Text>
      </TouchableOpacity>

      {selectedCountry && (
        <TouchableOpacity
          style={styles.countryCard}
          onPress={() => navigation.navigate('CountryDetail', { country: selectedCountry })}
        >
          <Image source={{ uri: selectedCountry.flags.png }} style={styles.flag} />
          {/* Ülke ismi artık gösterilmiyor */}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c0c2b',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#2e2e5e',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  countryCard: {
    alignItems: 'center',
    backgroundColor: '#1e1e3f',
    padding: 20,
    borderRadius: 15,
  },
  flag: {
    width: 200, // daha büyük bayrak
    height: 120,
    borderRadius: 8,
  },
});
