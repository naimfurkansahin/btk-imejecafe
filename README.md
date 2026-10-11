# ☕ İmeje Lounge Cafe — Tanıtım Web Sitesi

> **"Kahven hazır, köşen sessiz."**  
> Trabzon Söğütlü'de, Trabzon Üniversitesi'ne 5 dakika yürüme mesafesinde nitelikli kahve ve sessiz çalışma ortamı.

Bu proje; **BTK Akademi** ve **Gençlik ve Spor Bakanlığı (GSB)** iş birliğiyle yürütülen **Genç2030** vizyonu kapsamındaki atölye çalışmasında **İMEJE Takımı** tarafından sıfırdan tasarlanıp kodlanmıştır.

---

## 🔗 Hızlı Bağlantılar

* 🌐 **İMEJE Takımı Resmi Web Sitesi:** [imejeteam.com](https://imejeteam.com)
* 💻 **Proje Kaynak Kodları (GitHub):** [github.com/naimfurkansahin/btk-imejecafe](https://github.com/naimfurkansahin/btk-imejecafe)
* 📍 **Konum:** Söğütlü Mahallesi, Sahil Caddesi, Akçaabat / Trabzon (Trabzon Üniversitesi Fatih Kampüsü'ne 5 dk yürüme)

---

## 🏛️ Proje Bağlamı ve İş Birliği

Bu çalışma, üniversite gençliğinin dijital üretim yetkinliklerini geliştirmek, modern web teknolojileriyle somut ürünler ortaya koymak ve yerel ekosisteme değer katan fikirleri hayata geçirmek amacıyla hayata geçirilmiştir:
* **BTK Akademi:** Yazılım ve dijital beceri geliştirme vizyonu.
* **Gençlik ve Spor Bakanlığı (GSB):** Gençlerin üretkenliğini ve atölye ekosistemini destekleyen altyapı.
* **Genç2030:** Geleceğin dijital dünyasına hazırlayan tematik çalışma atölyesi.
* **İMEJE Takımı:** Projenin ürün tasarımı, arayüz mimarisi ve kod geliştirmesini gerçekleştiren ekip ([imejeteam.com](https://imejeteam.com)).

---

## 🎯 Projenin Amacı ve Çözdüğü Problem

Trabzon Üniversitesi çevresinde sınav ve vize-final dönemlerinde ders çalışmak isteyen öğrencilerin karşılaştığı temel problemler:
1. Kütüphanelerin soğuk, kalabalık ve yer bulunamayan atmosferi,
2. Klasik kafelerin yüksek sesli müzik ve dikkat dağıtıcı gürültüsü,
3. Priz ve kesintisiz internet erişimi yetersizliği.

**İmeje Lounge Cafe**, "üçüncü bir yaşam alanı" olarak bu ihtiyacı çözer:
* Telefon görüşmesi yapılmayan **sessiz salon politikası**,
* Ortak projeler için **3 adet 6 kişilik bağımsız grup masası**,
* Tüm masalarda priz ve yüksek hızlı fiber Wi-Fi,
* Öğrenci kimliğini gösterene tüm içeceklerde **%15 indirim**,
* Yerel kavurucudan haftalık taze kavrulan çekirdekler ve sabah pişen ev yapımı tatlılar.

---

## ✨ Öne Çıkan Özellikler

| Özellik | Açıklama |
| :--- | :--- |
| **30 Saniyede Karar (Mobile-First UX)** | Ziyaretçi telefondan 30 saniye içinde menüyü, açık/kapalı durumunu ve konumu görür. |
| **Dinamik Açık / Kapalı Göstergesi** | Ziyaretçinin yerel saatine göre otomatik hesaplanır (Hafta içi 08:00-23:00, Cts 09:00-23:00, Paz 10:00-22:00). |
| **Kategorili Menü & Şeffaf Fiyatlar** | Sıcak Kahveler, Soğuk İçecekler, Çay & Diğerleri, Tatlılar sekmeleriyle anlık filtreleme. |
| **Grup Masası Talep Formu** | JavaScript alan denetimli form; gönderildiğinde `mailto:` protokolüyle hazır e-posta şablonunu açar. |
| **WhatsApp / Sosyal Medya Bannerı** | WhatsApp'ta link paylaşıldığında otomatik şık görsel çıkmasını sağlayan Open Graph (`og:image`) etiketleri (`banner.jpg`). |
| **Sıfır Stok Fotoğraf** | Stok fotoğraf yerine kahve fincanı, duman ve açık kitap temalı minimalist **SVG çizim** kullanılmıştır. |
| **Üst Sabit Menü & Akıllı Kaydırma** | Tüm bağlantılarda menü çubuğunun başlığı kapatmasını engelleyen `scroll-margin-top` hesaplaması. |

---

## 🎨 Tasarım Sistemi ve Renk Paleti

* **Krem Zemin:** `#FBF7F1` (Sıcak, sakin ve göz yormayan zemin)
* **Koyu Kahve Metin:** `#2F2219` (Zengin espresso tonu, yüksek kontrast)
* **Karamel Vurgu:** `#A0522D` (Sıcak toprak/karamel detayları ve aksiyon butonları)
* **Adaçayı Yeşili:** `#4F6B57` (Doğal, dinlendirici kütüphane köşesi hissi)
* **Tipografi:** 
  * Başlıklar: **Fraunces** (Modern edebi serif yazı tipi)
  * Gövde Metinleri: **Inter** (Ekran okunabilirliği yüksek sans-serif)

---

## 🛠️ Teknoloji Yığını

* **HTML5:** Semantik, SEO ve erişilebilirlik standartlarına uygun yapı.
* **CSS3:** Flexbox, CSS Grid, Custom Properties (değişkenler), sıfır harici CSS framework'ü.
* **Vanilla JavaScript:** Bağımlılıksız saf JS ile çalışma saatleri mantığı, sekme filtreleme ve form doğrulama.
* **Statik Barındırma:** GitHub Pages veya Netlify üzerinde tek tıkla ve ücretsiz yayınlanabilir.

---

## 📂 Dosya Yapısı

```
btk/
├── index.html        # Tek sayfalık ana yapı (5 bölüm, başlık ve üst eylem çubuğu)
├── style.css         # Tasarım sistemi, renkler, tipografi ve mobil uyumluluk
├── app.js            # Canlı saat kontrolü, menü filtreleme ve form mantığı
├── banner.jpg        # Resmi logo, favicon ve WhatsApp paylaşım bannerı
└── README.md         # Proje dokümantasyonu ve tanıtım rehberi
```

---

## 🚀 Yerel Olarak Çalıştırma

Proje sıfır kurulum gerektirir. Herhangi bir paket yöneticisi (`npm`, `yarn` vb.) çalıştırmanıza gerek yoktur:

1. Proje klasöründeki [`index.html`](index.html) dosyasına çift tıklayarak doğrudan Chrome, Edge, Safari veya Firefox tarayıcınızda açabilirsiniz.
2. Veya VS Code kullanıyorsanız **Live Server** eklentisiyle çalıştırabilirsiniz.
3. Python ile yerel sunucu başlatmak için:
   ```bash
   python -m http.server 3000
   ```
   Tarayıcınızda `http://localhost:3000` adresine gidebilirsiniz.

---

## 🌐 GitHub Pages Üzerinde Yayınlama

1. Bu projeyi bir GitHub deposuna yükleyin:
   ```bash
   git init
   git add .
   git commit -m "feat: İmeje Lounge Cafe resmi sürümü"
   git branch -M main
   git remote add origin https://github.com/naimfurkansahin/btk-imejecafe.git
   git push -u origin main
   ```
2. GitHub'da deponuzun **Settings > Pages** sekmesine gidin.
3. **Branch** olarak `main` ve `/ (root)` seçip **Save** butonuna tıklayın.
4. Siteniz 1 dakika içinde `https://naimfurkansahin.github.io/btk-imejecafe/` adresinde canlıya geçecektir.

---

## 👥 Proje Ekibi & Telif

* **Geliştirici:** [İMEJE Takımı](https://imejeteam.com)
* **Atölye Kapsamı:** BTK Akademi & GSB Genç2030 Atölyesi
* **Konum:** Trabzon Söğütlü, Türkiye
* **Lisans:** MIT Lisansı © 2026 İmeje Lounge Cafe. Tüm hakları saklıdır.
