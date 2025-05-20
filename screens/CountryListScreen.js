import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CountryListScreen() {
  return (
    <View style={styles.container}>
      <Text>Ana Sayfa - Ülke Listesi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
