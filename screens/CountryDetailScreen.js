import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const CountryDetailScreen = ({ route, navigation }) => {
  const { country } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: '' });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Ülke Detayı</Text>

      <View style={styles.card}>
        <Image source={{ uri: country.flags.png }} style={styles.flag} />
        <Text style={styles.countryName}>{country.name.common}</Text>
      </View>

      <View style={styles.card}><Text style={styles.label}>Başkent:</Text><Text style={styles.value}>{country.capital?.[0] || 'Yok'}</Text></View>
      <View style={styles.card}><Text style={styles.label}>Bölge:</Text><Text style={styles.value}>{country.region}</Text></View>
      <View style={styles.card}><Text style={styles.label}>Alt Bölge:</Text><Text style={styles.value}>{country.subregion || 'Yok'}</Text></View>
      <View style={styles.card}><Text style={styles.label}>Nüfus:</Text><Text style={styles.value}>{country.population.toLocaleString()}</Text></View>
      <View style={styles.card}><Text style={styles.label}>Para Birimi:</Text><Text style={styles.value}>{country.currencies ? Object.values(country.currencies)[0].name : 'Yok'}</Text></View>
      <View style={styles.card}><Text style={styles.label}>Diller:</Text><Text style={styles.value}>{country.languages ? Object.values(country.languages).join(', ') : 'Yok'}</Text></View>
      <View style={styles.card}><Text style={styles.label}>Zaman Dilimleri:</Text><Text style={styles.value}>{country.timezones.join(', ')}</Text></View>
      <View style={styles.card}><Text style={styles.label}>Bağımsız mı?:</Text><Text style={styles.value}>{country.independent ? 'Evet' : 'Hayır'}</Text></View>
      <View style={styles.card}><Text style={styles.label}>Konum:</Text><Text style={styles.value}>{country.latlng[0]}, {country.latlng[1]}</Text></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0c2b',
    padding: 20,
    flex: 1,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    paddingBottom: 10,
  },
  card: {
    backgroundColor: '#1a1a3d',
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
  },
  flag: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  countryName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#cccccc',
    fontWeight: '600',
    marginBottom: 5,
  },
  value: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default CountryDetailScreen;
