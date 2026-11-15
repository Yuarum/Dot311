import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

// Ek Görev 4: Kart verileri bir diziye taşındı (değer ve renkler özelleştirildi)
const istatistikler = [
    { id: 1, deger: '2.450', baslik: 'Puan', renk: '#2f6fed' },
    { id: 2, deger: '64', baslik: 'Galibiyet', renk: '#22a06b' },
    { id: 3, deger: '850', baslik: 'Altın', renk: '#e2a400' },
    { id: 4, deger: '19', baslik: 'Rozet', renk: '#c9372c' },
];

// Ek Görev 2: Etkinlikler dizisine 2 yeni etkinlik eklendi (toplam 5 etkinlik)
const etkinlikler = [
    { id: 1, metin: 'Boss savaşını kazandın', zaman: '2 saat önce' },
    { id: 2, metin: 'Yeni rozet: Hız Ustası', zaman: 'Dün' },
    { id: 3, metin: '3. seviyeyi bitirdin', zaman: '2 gün önce' },
    { id: 4, metin: 'Efsanevi kılıç sandığı açıldı', zaman: '3 gün önce' },
    { id: 5, metin: 'Arena turnuvasında ilk 10’a girdin', zaman: '4 gün önce' },
];

function StatKarti({ deger, baslik, renk }) {
    return (
        <View style={[styles.kart, { borderLeftColor: renk }]}>
            <Text style={styles.kartDeger}>{deger}</Text>
            <Text style={styles.kartBaslik}>{baslik}</Text>
        </View>
    );
}

// Ek Görev 3: İlerleme çubuğu ayrı bir bileşene çevrildi
function IlerlemeCubugu({ seviye, yuzde }) {
    return (
        <View style={styles.bolum}>
            <View style={styles.seviyeSatir}>
                <Text style={styles.bolumBaslik}>Seviye {seviye}</Text>
                <Text style={styles.yuzde}>%{yuzde}</Text>
            </View>
            <View style={styles.cubukDis}>
                <View style={[styles.cubukIc, { width: `${yuzde}%` }]} />
            </View>
        </View>
    );
}

export default function App() {
    return (
        <ScrollView style={styles.ekran}>
            {/* 1. Üst Bar */}
            <View style={styles.ustBar}>
                <Image
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    style={styles.avatar}
                />
                <View>
                    <Text style={styles.selam}>Merhaba, Erke!</Text>
                    <Text style={styles.altYazi}>Bugün de oynayalım mı?</Text>
                </View>
            </View>

            {/* 2. İstatistik Kartları (2x2 - map ile basılıyor) */}
            <View style={styles.kartlar}>
                {istatistikler.map((item) => (
                    <StatKarti
                        key={item.id}
                        deger={item.deger}
                        baslik={item.baslik}
                        renk={item.renk}
                    />
                ))}
            </View>

            {/* 3. İlerleme Çubuğu Bileşeni */}
            <IlerlemeCubugu seviye={7} yuzde={65} />

            {/* 4. Son Etkinlikler Listesi */}
            <View style={styles.bolum}>
                <Text style={styles.bolumBaslik}>Son Etkinlikler</Text>
                {etkinlikler.map((e) => (
                    <View key={e.id} style={styles.etkinlik}>
                        <Text>• {e.metin}</Text>
                        <Text style={styles.zaman}>{e.zaman}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ekran: { flex: 1, backgroundColor: '#f4f6fb', padding: 20, paddingTop: 60 },
    ustBar: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
    avatar: { width: 56, height: 56, borderRadius: 28, marginRight: 12 },
    selam: { fontSize: 22, fontWeight: 'bold' },
    altYazi: { fontSize: 14, color: 'gray' },
    kartlar: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    kart: {
        width: '48%',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 12,
        borderLeftWidth: 5,
        marginBottom: 12,
    },
    kartDeger: { fontSize: 24, fontWeight: 'bold' },
    kartBaslik: { fontSize: 14, color: 'gray', marginTop: 4 },
    bolum: { backgroundColor: 'white', padding: 16, borderRadius: 12, marginBottom: 12 },
    seviyeSatir: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    bolumBaslik: { fontSize: 16, fontWeight: 'bold' },
    yuzde: { fontSize: 16, color: '#2f6fed', fontWeight: 'bold' },
    cubukDis: { height: 12, backgroundColor: '#e3e7f0', borderRadius: 6 },
    cubukIc: { height: 12, backgroundColor: '#2f6fed', borderRadius: 6 },
    etkinlik: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    zaman: { fontSize: 12, color: 'gray' },
});