# DOT311 — Mobil Uygulama Geliştirme I

Bu depo, **Dijital Oyun Tasarımı Bölümü DOT311** dersi kapsamında React Native ve Expo kullanılarak geliştirilen haftalık alıştırmaları ve uygulama projelerini içermektedir.

## Haftalık İlerleme ve Yapılan Çalışmalar

### 1. Hafta: Mobil Geliştirmeye Giriş ve Ortam Kurulumu
* Mobil uygulama geliştirme yaklaşımları (Native, Web, Hibrit, Çapraz Platform) incelendi.
* **Node.js**, **Expo Go** ve **WebStorm** geliştirme ortamı kuruldu; GitHub depo bağlantısı yapılandırıldı.
* `npx create-expo-app` ile ilk Expo projesi (`ilk-uygulama`) oluşturuldu ve `App.js` üzerinde **Fast Refresh** (anlık yenileme) test edildi.

### 2. Hafta: React Native için JavaScript (ES6+) Temelleri
* Modern JavaScript yapıları (`const`/`let`, arrow functions, template literals, destructuring, spread, `import`/`export`) üzerine çalışıldı.
* `alistirma2.js` dosyasında oyuncu listesi üzerinde `map` (isim çıkarma), `filter` (30 puan üstünü filtreleme) ve `forEach` (template literal ile konsola yazdırma) metotları uygulandı.
* `App.js` içerisinde `map` metodu ve `key` prop'u kullanılarak ekrana dinamik skor tablosu listesi basıldı.

### 3. Hafta: Bileşen (Component), JSX ve Props
* Ekran arayüzünü tekrar kullanılabilir parçalara ayırmak için özel fonksiyon bileşenleri oluşturuldu.
* `OyuncuKarti` bileşenine `seviye` prop'u eklendi ve dinamik olarak kart üzerinde gösterildi.
* Oyun envanterine yönelik `EsyaKarti` (`ad` ve `deger` prop'ları) bileşeni geliştirildi ve farklı verilerle çoğaltılarak ekranda kullanıldı.

### 4. Hafta: Temel Bileşenler ve Flexbox Düzeni
* `View`, `Text`, `Image` ve `ScrollView` temel bileşenleri ile `StyleSheet.create` stil yapısı kullanılarak **Karakter Profil Ekranı** tasarlandı.
* İstatistik kutuları tekrar kullanılabilir `<StatKutusu />` bileşenine dönüştürüldü ve profil ekranına 4. istatistik (*Zeka*) eklendi.
* Yerel `assets` klasöründen `require()` ile karakter avatarı projeye dahil edildi ve `flexDirection: 'row'` ile yatay hizalama sağlandı.

### Ek Etkinlik: Oyun Dashboard Paneli
* Oyuncu istatistiklerini ve son etkinliklerini gösteren kapsamlı bir kontrol paneli geliştirildi.
* `flexWrap: 'wrap'` ile **2x2 istatistik kartı ızgarası** oluşturuldu ve kart verileri bir diziye taşınarak `map` ile dinamik hale getirildi.
* Seviye ilerleme çubuğu ayrı bir `<IlerlemeCubugu />` bileşeni olarak modülerleştirildi ve son etkinlikler listesi genişletildi.

### 6. Hafta: Kullanıcı Girdisi, Olaylar ve State Yönetimi (Sayı Tahmin Oyunu)
* `useState`, `TextInput` (kontrollü girdi) ve özelleştirilebilir `Pressable` bileşenleri kullanılarak **1–100 Sayı Tahmin Oyunu** geliştirildi.
* Rakam klavyesi (`keyboardType="numeric"`), boş/hatalı giriş doğrulaması (`isNaN`, `trim()`), yönlendirme mesajları (*"Daha büyük!"* / *"Daha küçük!"*) ve deneme sayacı eklendi.
* Doğru tahmin sonrası oyunu sıfırlayıp yeni rastgele sayı üreten **Yeniden Oyna** mekanizması entegre edildi.

## Projeyi Çalıştırma

```bash
cd ilk-uygulama
npm install
npx expo start
