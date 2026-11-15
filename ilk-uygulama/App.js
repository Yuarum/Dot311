import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

function StatKutusu({ deger, ad }) {
    return (
        <View style={styles.kutu}>
            <Text style={styles.deger}>{deger}</Text>
            <Text>{ad}</Text>
        </View>
    );
}

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.ekran}>
            <Image
                source={require('./assets/karakter.png')}
                style={styles.avatar}
            />

            <Text style={styles.isim}>Kahraman Kaan</Text>
            <Text style={styles.sinif}>Seviye 7 Savaşçı</Text>

            <View style={styles.satir}>
                <StatKutusu deger={120} ad="Can" />
                <StatKutusu deger={45} ad="Güç" />
                <StatKutusu deger={30} ad="Hız" />
                <StatKutusu deger={60} ad="Zeka" />
            </View>

            <Text style={styles.aciklama}>
                Kaan, kuzey dağlarından gelen cesur bir savaşçıdır.
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ekran: { alignItems: 'center', padding: 24, paddingTop: 80 },
    avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 12 },
    isim: { fontSize: 26, fontWeight: 'bold' },
    sinif: { fontSize: 16, color: 'gray', marginBottom: 24 },
    satir: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    kutu: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eef3ff',
        padding: 12,
        marginHorizontal: 3,
        borderRadius: 10,
    },
    deger: { fontSize: 20, fontWeight: 'bold' },
    aciklama: { marginTop: 24, fontSize: 16, textAlign: 'center' },
});