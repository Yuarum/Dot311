import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';

function rastgeleSayiUret() {
    return Math.floor(Math.random() * 100) + 1;
}

export default function App() {
    const [gizli, setGizli] = useState(rastgeleSayiUret);
    const [tahmin, setTahmin] = useState('');
    const [mesaj, setMesaj] = useState('1 ile 100 arasında bir sayı tuttum. Tahmin et!');
    const [denemeSayisi, setDenemeSayisi] = useState(0);
    const [bildiMi, setBildiMi] = useState(false);

    function tahminKontrolEt() {
        const sayi = Number(tahmin.trim());

        // Geçersiz giriş kontrolü (boş, sayı değil veya 1-100 dışı)
        if (tahmin.trim() === '' || isNaN(sayi) || sayi < 1 || sayi > 100) {
            setMesaj('Lütfen 1 ile 100 arasında geçerli bir sayı gir!');
            setTahmin('');
            return;
        }

        const yeniDeneme = denemeSayisi + 1;
        setDenemeSayisi(yeniDeneme);

        if (sayi < gizli) {
            setMesaj('Daha büyük!');
        } else if (sayi > gizli) {
            setMesaj('Daha küçük!');
        } else {
            setMesaj(`Bildin! (${yeniDeneme}. tahminde buldun)`);
            setBildiMi(true);
        }

        // Her tahminden sonra kutuyu temizle
        setTahmin('');
    }

    function yenidenOyna() {
        setGizli(rastgeleSayiUret());
        setTahmin('');
        setMesaj('Yeni bir sayı tuttum. Haydi tahmin et!');
        setDenemeSayisi(0);
        setBildiMi(false);
    }

    return (
        <View style={styles.ekran}>
            <Text style={styles.baslik}>Sayı Tahmin Oyunu</Text>
            <Text style={styles.sayac}>Deneme Sayısı: {denemeSayisi}</Text>

            <View style={styles.mesajKutusu}>
                <Text style={styles.mesaj}>{mesaj}</Text>
            </View>

            {!bildiMi ? (
                <>
                    <TextInput
                        value={tahmin}
                        onChangeText={setTahmin}
                        placeholder="1 - 100 arası sayı gir"
                        keyboardType="numeric"
                        maxLength={3}
                        onSubmitEditing={tahminKontrolEt}
                        style={styles.kutu}
                    />

                    <Pressable
                        onPress={tahminKontrolEt}
                        style={({ pressed }) => [styles.buton, pressed && styles.basili]}
                    >
                        <Text style={styles.butonYazi}>Tahmin Et</Text>
                    </Pressable>
                </>
            ) : (
                /* Bonus: Bilince "Yeniden Oyna" butonu çıkar ve yeni gizli sayı üretir */
                <Pressable
                    onPress={yenidenOyna}
                    style={({ pressed }) => [styles.buton, styles.yenidenButon, pressed && styles.basili]}
                >
                    <Text style={styles.butonYazi}>Yeniden Oyna</Text>
                </Pressable>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    ekran: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f4f6fb' },
    baslik: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginBottom: 8, color: '#1c2b45' },
    sayac: { fontSize: 16, textAlign: 'center', color: 'gray', marginBottom: 24 },
    mesajKutusu: { backgroundColor: 'white', padding: 20, borderRadius: 12, marginBottom: 20, borderWidth: 1, borderColor: '#ccd3e0' },
    mesaj: { fontSize: 18, textAlign: 'center', fontWeight: 'bold', color: '#2f6fed' },
    kutu: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccd3e0',
        borderRadius: 10,
        padding: 14,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 16,
    },
    buton: { backgroundColor: '#2f6fed', padding: 16, borderRadius: 12 },
    yenidenButon: { backgroundColor: '#22a06b' },
    basili: { opacity: 0.7, transform: [{ scale: 0.98 }] },
    butonYazi: { color: 'white', fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});