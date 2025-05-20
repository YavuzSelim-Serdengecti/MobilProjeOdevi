import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RandomCountryScreen() {
  return (
    <View style={styles.container}>
      <Text>Rastgele Ülke Sayfası</Text>
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
