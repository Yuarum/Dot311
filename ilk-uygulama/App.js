import { StyleSheet, Text, View } from 'react-native';

// 1. Görev: OyuncuKarti bileşenine 'seviye' prop'u eklendi
function OyuncuKarti({ isim, puan, seviye }) {
  return (
      <View style={styles.kart}>
        <Text style={styles.isim}>{isim}</Text>
        <Text>Puan: {puan}</Text>
        <Text>Seviye: {seviye}</Text>
      </View>
  );
}

// 2. Görev: Kendi oyunumuza uygun EsyaKarti bileşeni (eşya adı ve değeri)
function EsyaKarti({ ad, deger }) {
  return (
      <View style={styles.esyaKart}>
        <Text style={styles.isim}>{ad}</Text>
        <Text>Değer: {deger} Altın</Text>
      </View>
  );
}

export default function App() {
  return (
      <View style={styles.ekran}>
        <Text style={styles.baslik}>Skor Tablosu</Text>
        <OyuncuKarti isim="Ayşe" puan={40} seviye={3} />
        <OyuncuKarti isim="Veli" puan={15} seviye={1} />
        <OyuncuKarti isim="Zeynep" puan={70} seviye={5} />

        {/* 3. Görev: EsyaKarti bileşenini en az 3 kez farklı bilgilerle kullanma */}
        <Text style={styles.baslik}>Envanter</Text>
        <EsyaKarti ad="Alev Kılıcı" deger={250} />
        <EsyaKarti ad="Çelik Kalkan" deger={120} />
        <EsyaKarti ad="Can İksiri" deger={45} />
      </View>
  );
}

const styles = StyleSheet.create({
  ekran: { flex: 1, padding: 24, marginTop: 40 },
  baslik: { fontSize: 24, fontWeight: 'bold', marginTop: 12, marginBottom: 10 },
  kart: { backgroundColor: '#eef3ff', padding: 14, borderRadius: 10, marginBottom: 8 },
  esyaKart: { backgroundColor: '#fff3e0', padding: 14, borderRadius: 10, marginBottom: 8 },
  isim: { fontSize: 18, fontWeight: 'bold' },
});