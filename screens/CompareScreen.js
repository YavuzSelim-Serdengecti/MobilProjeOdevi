// screens/CompareScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CompareScreen() {
  const [countries, setCountries] = useState([]);
  const [country1, setCountry1] = useState('');
  const [country2, setCountry2] = useState('');
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
      });
  }, []);

  useEffect(() => {
    if (country1) {
      fetch(`https://restcountries.com/v3.1/name/${country1}`)
        .then((res) => res.json())
        .then((data) => setData1(data[0]));
    }
    if (country2) {
      fetch(`https://restcountries.com/v3.1/name/${country2}`)
        .then((res) => res.json())
        .then((data) => setData2(data[0]));
    }
  }, [country1, country2]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ülke Karşılaştırma</Text>

      <Picker
        selectedValue={country1}
        onValueChange={(value) => setCountry1(value)}
        style={styles.picker}
      >
        <Picker.Item label="1. Ülkeyi Seçin" value="" />
        {countries.map((c) => (
          <Picker.Item key={c.cca3} label={c.name.common} value={c.name.common} />
        ))}
      </Picker>

      <Picker
        selectedValue={country2}
        onValueChange={(value) => setCountry2(value)}
        style={styles.picker}
      >
        <Picker.Item label="2. Ülkeyi Seçin" value="" />
        {countries.map((c) => (
          <Picker.Item key={c.cca3} label={c.name.common} value={c.name.common} />
        ))}
      </Picker>

      <View style={styles.comparison}>
        <View style={styles.box}>
          <Text style={styles.countryName}>{data1?.name?.common || '—'}</Text>
          <Text>Nüfus: {data1?.population?.toLocaleString() || '—'}</Text>
          <Text>Başkent: {data1?.capital?.[0] || '—'}</Text>
          <Text>Yüzölçümü: {data1?.area} km²</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.countryName}>{data2?.name?.common || '—'}</Text>
          <Text>Nüfus: {data2?.population?.toLocaleString() || '—'}</Text>
          <Text>Başkent: {data2?.capital?.[0] || '—'}</Text>
          <Text>Yüzölçümü: {data2?.area} km²</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  picker: { marginVertical: 10, backgroundColor: '#f0f0f0' },
  comparison: { flexDirection: 'row', justifyContent: 'space-between' },
  box: { flex: 1, padding: 10, margin: 5, backgroundColor: '#e8e8e8', borderRadius: 8 },
  countryName: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
});
