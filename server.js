// 1. Express kütüphanesini projeye dahil et (import)
const express = require('express');
// 2. Yeni bir Express uygulaması (app) oluştur
const app = express();
// 2.1. Express'in JSON verileri okuyabilmesini sağla (Middleware)
app.use(express.json());
// 3. Bir port numarası belirle (Örn: 3000)
const PORT = 7000;
// 3.1. Geçici veritabanı (JSON dizisi) oluştur: İçinde 3 tane kitap olsun (id, ad, yazar)
const kitaplar = [
    { id: 1, ad: 'Suç ve Ceza', yazar: 'Fyodor Dostoyevski' },
    { id: 2, ad: '1984', yazar: 'George Orwell' },
    { id: 3, ad: 'Küçük Prens', yazar: 'Antoine de Saint-Exupéry' }
];
// 4. Ana sayfaya ("/") gelen GET isteğine cevap ver ("Merhaba Backend" desin)
app.get('/', (req, res, next) => {
  res.send('Merhaba Backend');
});
// 4.1. "/kitaplar" adresine gelen GET isteğine cevap ver: Tüm kitap listesini gönder
app.get("/kitaplar", (req, res) => {
    res.json(kitaplar);
})
// 4.2. "/kitaplar" adresine gelen POST isteğini karşıla: Yeni kitabı listeye ekle
app.post("/kitaplar", (req, res) => {
    const yeniKitap = req.body;
    kitaplar.push(yeniKitap);
    res.status(201).json(yeniKitap);
});
app.put("/kitaplar/:id", (req, res) => {
    const kitap = kitaplar.find(k => k.id === parseInt(req.params.id));
    if (!kitap) {
        return  res.status(404).json({message: "Bulunamadı!"})
    }
        kitap.ad = req.body.ad
        kitap.yazar = req.body.yazar

        res.json(kitap);
})
// 4.3. DELETE İsteği: ID'si verilen kitabı listeden sil
app.delete('/kitaplar/:id', (req, res) => {
    // 1. URL'den ID'yi al (parseInt ile sayıya çevirmeyi unutma)
    
    // 2. Bu ID'ye sahip kitabın listedeki sırasını (index) bul
    // İpucu: kitaplar.findIndex(...) kullan

    // 3. Eğer kitap yoksa (index -1 ise) 404 döndür

    // 4. Eğer varsa, o sıradaki kitabı listeden uçur
    // İpucu: kitaplar.splice(index, 1) kullan

    // 5. Başarılı kodu (204) veya mesaj döndür
    const kitapId = kitaplar.findIndex(k => k.id === parseInt(req.params.id));
    if (kitapId === -1) { 
        return res.status(404).json({message: "Kayıt Bulunamadı"})
    }
    const silinenKitap = kitaplar.splice(kitapId, 1)
    res.json(silinenKitap[0]);

});
// 5. Sunucuyu başlat ve belirlenen portu dinle
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor...`);
});

