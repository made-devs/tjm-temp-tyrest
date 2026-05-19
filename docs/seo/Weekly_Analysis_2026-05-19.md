# Analisa SEO Mingguan TJM Auto Care
**Tanggal Analisa:** 19 Mei 2026
**Sumber Data:** Google Search Console (Queries.csv, Pages.csv)

---

## 🚨 ALERT: Analisa Penurunan Trafik (Week-over-Week)

Berdasarkan perbandingan data "Last 7 days" vs "Previous 7 days", terdapat **penurunan klik dan impresi yang cukup signifikan** secara keseluruhan. Berikut adalah breakdown sumber penurunannya:

### 1. Penurunan Drastis Pencarian Brand (Branded Queries)
Sumbangan terbesar penurunan trafik minggu ini berasal dari kata kunci yang mengandung nama *brand*.
*   **"tjm auto care"**: Klik turun dari 56 ke 36 (↓ 35%), Impresi turun dari 657 ke 480.
*   **"tjm" & "tjmautocare"**: Keduanya mengalami penurunan klik hingga 50%.
*   **Pencarian Brand + Kota**: Kueri seperti "tjm auto care jogja" anjlok parah (Klik turun dari 15 ke 4, impresi dari 72 ke 43).
*   **Dampak ke Halaman**: Karena pencarian brand mayoritas masuk ke *Homepage*, maka performa halaman `/` (Homepage) ikut turun dari 170 klik ke 136 klik (↓ 20%).
*   **Diagnosa**: Penurunan *branded search* biasanya tidak berkaitan langsung dengan masalah teknis SEO di website, melainkan karena menurunya *Brand Awareness* minggu ini (bisa karena aktivitas *marketing* offline, *ads*, atau viralitas di Sosmed seperti TikTok/IG sedang menurun, atau faktor musiman/tanggal tua).

### 2. Pergeseran Intent: Generic Turun, "Terdekat" (Lokal) Malah Naik
Ada tren yang sangat menarik pada pencarian *non-branded* (layanan).
*   **Generic Turun**: Kueri umum seperti "bengkel kaki kaki mobil" (klik 11 ↓ 9) dan "service kaki kaki mobil" (klik 11 ↓ 5) mengalami penurunan. Akibatnya, halaman `/layanan/paket-kaki-kaki` ikut terdampak (klik turun dari 65 ke 50).
*   **"Terdekat" Naik**: Kueri spesifik berbasis lokasi (Near Me) seperti **"bengkel kaki kaki mobil terdekat"** justru NAIK (Klik naik dari 31 ke 39, Impresi naik dari 1574 ke 1734). 
*   **Dampak ke Halaman Kota**: Halaman Programmatic SEO kota kita justru **tahan banting dan malah tumbuh**. `/kota/bekasi` (Klik naik 67 ↑ 70) dan `/kota/surabaya` (Klik naik 52 ↑ 66).
*   **Diagnosa**: User semakin spesifik mencari lokasi terdekat, bukan sekadar layanan umum. Karena halaman `/layanan/` kita kurang *localized*, performanya menurun. Sebaliknya, halaman `/kota/` sangat diuntungkan oleh tren ini.

---

## 🎯 Strategi & Checklist Tindakan (Action Items)

Karena kita tidak bisa mengandalkan trafik *Branded* terus-menerus, kita harus **memperkuat trafik pencarian organik non-branded** dan memanfaatkan tren "Terdekat" yang sedang naik.

Tandai dengan `[x]` jika sudah dieksekusi.

### 📍 Fokus 1: Maksimalkan Halaman "Kota" (Karena Lagi Naik Daun)
- [x] **Inject Kata Kunci Lokal (Onderstel/Skok):** Tambahkan kata kunci "onderstel" dan "skok mobil" ke dalam konten `src/data/cityLocalContent.js` khusus untuk region Jawa Timur & Jawa Tengah (Surabaya, Malang, Semarang) agar impresinya meroket.
- [x] **Perkuat CTA WhatsApp:** Pastikan tombol WhatsApp di halaman kota menggunakan parameter pre-filled text yang jelas dan mengarah langsung ke CS cabang.

### 🛠️ Fokus 2: Selamatkan Halaman "Layanan" (Agar Gak Turun Terus)
- [x] **Optimasi Meta Title:** Ubah meta title di `src/app/layanan/[slug]/page.js` agar lebih *click-bait* untuk melawan penurunan CTR. (Misal: dari `"Paket Kaki-Kaki | TJM"` menjadi `"Bengkel Spesialis Kaki-Kaki Mobil Terdekat - Mulai Rp 649rb"`). Tambahkan kata "Terdekat".
- [x] **Tambahkan Section Estimasi Biaya:** Tambahkan komponen atau info `Pricing` eksplisit di halaman layanan (terutama paket kaki-kaki) karena banyak user mencari "biaya servis kaki kaki".
- [x] **Push "Near Me" Signal:** Perkuat *wording* rekomendasi cabang terdekat di dalam halaman layanan (`ServiceDetailEditorialSection`) agar ikut menyerap kueri "terdekat".

### 📝 Fokus 3: Buka Keran Trafik Baru (Blog / Informational)
- [ ] Bikin 2 Artikel Blog Baru (Informational) untuk merebut trafik dari kueri dengan posisi jelek:
    - [x] Artikel 1: "Rincian Biaya Servis Kaki-Kaki Mobil & Estimasi Penggantian Part"
    - [ ] Artikel 2: "Penyebab Setir Mobil Bunyi Saat Belok (Gejala Rack Steer)"

---

## 📈 Evaluasi (Diisi Minggu Depan)
*Bagian ini digunakan untuk tracking hasil dari checklist di atas pada evaluasi minggu berikutnya (26 Mei 2026).*

*   **Apa yang works:** (Kosong)
*   **Apa yang kurang works:** (Kosong)
*   **Catatan Tambahan:** (Kosong)
