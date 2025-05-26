import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Hakkında</Text>

      <Text style={styles.paragraph}>
        Merhaba! Ben <Text style={styles.bold}>Yavuz Selim Serdengeçti</Text>. 
        Yıldız Teknik Üniversitesi Bilgisayar ve Öğretim Teknolojileri Eğitimi (BÖTE) 4. sınıf öğrencisiyim.
      </Text>

      <Text style={styles.paragraph}>
        Bu mobil uygulamayı, üniversitemde aldığım <Text style={styles.bold}>Mobil Programlama</Text> dersi kapsamında geliştirdim.
        Uygulama, ülkeleri tanımayı kolaylaştırmak amacıyla hazırlandı.
      </Text>

      <Text style={styles.paragraph}>
        {"\u2022"} Ana sayfada ülkelere dair temel bilgilere ulaşabilirsiniz.{"\n"}
        {"\u2022"} Arama ekranı ile istediğiniz ülkeyi filtreleyebilirsiniz.{"\n"}
        {"\u2022"} Rastgele sayfası ile oyun/yarış mantığıyla eğlenerek öğrenebilirsiniz.{"\n"}
        {"\u2022"} Karşılaştırma ekranı ile iki ülkeyi yan yana görüp kıyaslayabilirsiniz.
      </Text>

      <Text style={styles.paragraph}>
        Umarım bu uygulama sizin için hem bilgilendirici hem de keyifli olur. Teşekkürler!
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c0c2b',
    padding: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 40,
  },
  paragraph: {
    fontSize: 16,
    color: '#e0e0e0',
    marginBottom: 15,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
