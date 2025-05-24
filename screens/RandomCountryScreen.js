// screens/RandomCountryScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RandomCountryScreen() {
  const [randomCountry, setRandomCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchRandomCountry = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setRandomCountry(data[randomIndex]);
    } catch (error) {
      console.error('Ülke verisi alınamadı:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCountryPress = () => {
    navigation.navigate('CountryDetail', { country: randomCountry });
  };

  return (
    <View style={styles.container}>
      <Button title="Rastgele Ülke Seç" onPress={fetchRandomCountry} color="#bc4749" />

      {loading && <ActivityIndicator size="large" color="#bc4749" style={{ marginTop: 20 }} />}

      {randomCountry && !loading && (
        <TouchableOpacity style={styles.card} onPress={handleCountryPress}>
          <Image source={{ uri: randomCountry.flags.png }} style={styles.flag} />
          <Text style={styles.name}>{randomCountry.name.common}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
  },
  card: {
    marginTop: 30,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fefefe',
    width: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  flag: {
    width: 200,
    height: 120,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
