import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function CountryDetailScreen() {
  const route = useRoute();
  const { country } = route.params;

  const name = country.name?.common || country.name;
  const capital = country.capital?.[0] || 'Yok';
  const population = country.population || 'Bilinmiyor';
  const region = country.region || 'Yok';
  const subregion = country.subregion || 'Yok';
  const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'Yok';
  const languages = country.languages ? Object.values(country.languages).join(', ') : 'Yok';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: country.flags?.png || country.flag }} style={styles.flag} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.detail}>Başkent: {capital}</Text>
      <Text style={styles.detail}>Nüfus: {population}</Text>
      <Text style={styles.detail}>Bölge: {region}</Text>
      <Text style={styles.detail}>Alt Bölge: {subregion}</Text>
      <Text style={styles.detail}>Para Birimi: {currencies}</Text>
      <Text style={styles.detail}>Konuşulan Diller: {languages}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  flag: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
  },
});
