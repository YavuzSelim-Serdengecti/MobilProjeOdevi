// screens/AboutScreen.js

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Uygulama Hakkında</Text>

      <Text style={styles.text}>
        Merhaba! Ben <Text style={styles.bold}>Yavuz Selim Serdengeçti</Text>. 
        Yıldız Teknik Üniversitesi Bilgisayar ve Öğretim Teknolojileri Eğitimi (BÖTE) 4. sınıf öğrencisiyim.
      </Text>

      <Text style={styles.text}>
        Bu mobil uygulamayı <Text style={styles.bold}>Mobil Programlama</Text> dersi kapsamında geliştirdim. 
        Uygulamanın amacı, kullanıcıların dünya üzerindeki ülkeleri tanımasını kolay ve eğlenceli hale getirmektir.
      </Text>

      <Text style={styles.text}>
        Uygulamada birden fazla özellik yer almaktadır:
        {'\n'}• Ülke listesini görüntüleme
        {'\n'}• Arama ile ülke bulma
        {'\n'}• Detaylı ülke bilgilerine erişme
        {'\n'}• Rastgele ülke seçerek yarış tarzında öğrenme
      </Text>

      <Text style={styles.text}>
        Özellikle <Text style={styles.bold}>Rastgele Ülke</Text> özelliği ile kullanıcılar, ülkeleri eğlenceli bir şekilde keşfedebilir.
      </Text>

      <Text style={styles.footer}>Teşekkürler ve iyi keşifler! 🌍</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#bc4749',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#333',
  },
  bold: {
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 16,
    marginTop: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#555',
  },
});
