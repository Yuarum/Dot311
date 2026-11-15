const oyuncular = [
    { isim: "Ayşe", puan: 40 },
    { isim: "Veli", puan: 15 },
    { isim: "Zeynep", puan: 70 },
];

// 1) Sadece isimlerden oluşan bir dizi çıkar (map)
const isimler = oyuncular.map((oyuncu) => oyuncu.isim);
console.log("Sadece İsimler:", isimler);

// 2) Puanı 30'dan büyük oyuncuları filtrele (filter)
const yuksekPuanlilar = oyuncular.filter((oyuncu) => oyuncu.puan > 30);
console.log("30'dan Büyük Olanlar:", yuksekPuanlilar);

// 3) Her oyuncu için `${isim}: ${puan} puan` metni yazdır (forEach + template literal)
oyuncular.forEach((oyuncu) => {
    console.log(`${oyuncu.isim}: ${oyuncu.puan} puan`);
});