# Analisa GSC Mingguan dan Checklist Eksekusi

Tanggal analisa: 29 April 2026
Sumber data:

- `docs/seo/Pages.csv`
- `docs/seo/Queries.csv`
- audit ringan implementasi SEO di repo Next.js

## Ringkasan Eksekutif

Data minggu ini memperkuat kesimpulan bahwa problem utama TJM Auto Care bukan crawlability situs secara umum. Halaman utama, money page, dan cluster kota tetap mendapatkan impresi dan klik yang sehat. Artinya Google bisa mengakses, memahami, dan meranking banyak URL penting.

Status `Discovered - currently not indexed` yang masih muncul di Google Search Console lebih masuk akal dibaca sebagai problem seleksi URL dan prioritas crawl per cluster, bukan karena `robots.txt`, sitemap, atau noindex memblokir akses.

Kesimpulan paling penting minggu ini:

1. Cluster `kota` tetap menjadi growth engine SEO paling sehat.
2. Halaman `/layanan/paket-kaki-kaki` tetap menjadi money page utama yang wajib dilindungi dan didorong.
3. Masih ada gap besar di intent `biaya`, `cek`, `shockbreaker`, dan `rack steer`.
4. Sinyal URL hygiene masih perlu dipantau karena URL berparameter masih muncul di data GSC, walau isu `www` sendiri sudah diselesaikan di level Vercel.

## Temuan Utama dari Pages.csv

### 1. Halaman terkuat minggu ini

Halaman dengan kontribusi dan posisi paling penting:

| Halaman                    | Klik | Impresi |   CTR | Posisi |
| -------------------------- | ---: | ------: | ----: | -----: |
| `/`                        |  151 |    5497 | 2.75% |   5.04 |
| `/layanan/paket-kaki-kaki` |   95 |    5181 | 1.83% |   6.46 |
| `/kota/bekasi`             |   54 |    2147 | 2.52% |   5.72 |
| `/kota/surabaya`           |   53 |    1690 | 3.14% |   5.28 |
| `/kota/medan-1`            |   46 |     677 | 6.79% |   3.51 |
| `/kota`                    |   41 |    2659 | 1.54% |   6.00 |

Maknanya:

- Homepage, money page, dan halaman kota masih jadi fondasi utama organic growth.
- `/layanan/paket-kaki-kaki` menunjukkan performa paling penting dari sisi bisnis karena volume impresinya tinggi dan klik naik.
- `/kota` sebagai hub page membaik, tapi CTR masih rendah dan masih bisa diangkat lebih jauh.

### 2. Pemenang mingguan yang perlu dipush

Halaman yang menunjukkan momentum pertumbuhan jelas:

| Halaman                    | Klik Sebelumnya | Klik Sekarang | Delta |
| -------------------------- | --------------: | ------------: | ----: |
| `/kota/malang`             |               3 |            22 |   +19 |
| `/kota/jogja`              |              11 |            29 |   +18 |
| `/kota/bandung`            |              21 |            34 |   +13 |
| `/kota/samarinda`          |              17 |            27 |   +10 |
| `/kota`                    |              27 |            41 |   +14 |
| `/layanan/paket-kaki-kaki` |              74 |            95 |   +21 |

Maknanya:

- Cluster kota bukan hanya stabil, tapi benar-benar tumbuh.
- Kota seperti Malang, Jogja, Bandung, dan Samarinda layak masuk daftar prioritas optimasi konten minggu ini.
- Halaman hub `/kota` layak diperlakukan sebagai halaman strategis nasional, bukan sekadar index cabang.

### 3. Halaman yang melemah dan perlu perhatian

| Halaman                       | Klik Sebelumnya | Klik Sekarang | Catatan                                   |
| ----------------------------- | --------------: | ------------: | ----------------------------------------- |
| `/kontak`                     |              31 |            19 | Traffic turun, CTR tetap rendah           |
| `/layanan/paket-shockbreaker` |              14 |             9 | Impresi naik, CTR turun                   |
| `/layanan/paket-steering`     |              14 |            10 | Masih dapat impresi, tapi belum kuat klik |
| `/kota/semarang`              |               7 |             4 | Potensi lokal ada, tapi belum kuat        |

Maknanya:

- `paket-shockbreaker` dan `paket-steering` adalah kandidat recovery utama.
- Halaman `kontak` punya impresi besar tetapi CTR sangat rendah, kemungkinan kalah snippet dibanding homepage dan halaman kota.

### 4. Sinyal URL hygiene masih perlu dibersihkan

Masih muncul di data:

- URL berparameter seperti `/google/?gad_source=...`

Maknanya:

- Hostname `www` di export ini dibaca sebagai data historis. Redirect `www` ke non-`www` sudah diselesaikan di level Vercel dan bukan issue aktif di repo.
- URL berparameter tetap bukan penyebab utama masalah indexasi, tetapi masih merupakan noise yang mengganggu konsistensi sinyal canonical.
- Semakin rapi hostname, redirect, dan parameter handling, semakin fokus crawl budget ke halaman prioritas.

## Temuan Utama dari Queries.csv

### 1. Query kemenangan utama

Query yang paling sehat secara demand dan relevansi bisnis:

| Query                               | Klik | Impresi |   CTR | Posisi |
| ----------------------------------- | ---: | ------: | ----: | -----: |
| `bengkel kaki kaki mobil terdekat`  |   31 |    1580 | 1.96% |   6.12 |
| `service kaki kaki mobil`           |   19 |     297 | 6.40% |   2.35 |
| `bengkel kaki kaki mobil`           |    8 |     374 | 2.14% |   5.15 |
| `bengkel kaki-kaki mobil terdekat`  |    7 |     207 | 3.38% |   5.71 |
| `bengkel spesialis kaki kaki mobil` |    5 |      94 | 5.32% |   5.51 |

Maknanya:

- Intent nasional utama masih sangat jelas: `bengkel`, `service`, `spesialis`, `terdekat`.
- Ranking sudah cukup dekat ke page-1 atas, jadi game minggu ini adalah memperbesar CTR dan mempertebal relevance.

### 2. Query lokal yang paling sehat

Query kota dan brand lokal yang sudah menunjukkan match kuat:

- `tjm auto care bandung`
- `tjm auto care samarinda`
- `tjm auto care jogja`
- `tjm auto care balikpapan`
- `bengkel kaki kaki mobil malang`
- `bengkel kaki kaki mobil palembang`
- `bengkel kaki kaki mobil surabaya`

Maknanya:

- Halaman kota kuat ketika intent-nya jelas lokal dan dekat ke cabang.
- Ini mendukung strategi untuk menebalkan uniqueness halaman kota, bukan mengurangi jumlahnya.

### 3. Gap intent yang paling besar

Ada beberapa query dengan impresi cukup, tapi klik sangat lemah atau nol:

| Query                           | Impresi | Klik | Posisi | Makna                                        |
| ------------------------------- | ------: | ---: | -----: | -------------------------------------------- |
| `service shockbreaker terdekat` |     118 |    0 |   9.22 | belum ada landing yang cukup meyakinkan      |
| `service shockbreaker mobil`    |      97 |    0 |   7.48 | query ada, CTR nol                           |
| `cek kaki kaki mobil`           |     106 |    1 |   8.20 | intent ada, jawaban di site belum cukup kuat |
| `service rack steer terdekat`   |      63 |    1 |   5.25 | peluang bagus, butuh penguatan halaman       |
| `harga servis kaki kaki mobil`  |      24 |    0 |   4.25 | intent biaya belum dikonversi                |
| `biaya cek kaki kaki mobil`     |      22 |    0 |   5.05 | intent biaya + cek belum punya jawaban kuat  |

Maknanya:

- Kalian sudah diikutkan Google dalam persaingan query ini, tapi belum cukup menang untuk klik.
- Ini bukan sinyal untuk bikin konten random. Ini sinyal untuk membangun konten pendukung intent yang spesifik.

## Implikasi Strategis

### 1. Problem utama bukan teknis crawl, tapi kualitas dan prioritas URL

Audit repo menunjukkan:

- `robots.txt` tidak memblokir crawl.
- `sitemap.xml` live dan berstatus `200`.
- halaman utama dan sample halaman kota juga live `200`.
- canonical di banyak halaman utama sudah ada.

Artinya status `Discovered - currently not indexed` kemungkinan besar terjadi pada URL yang sudah ditemukan Google lewat sitemap atau internal link, tetapi belum dianggap prioritas untuk di-crawl/index karena:

- kontennya terlalu mirip antar halaman
- internal link ke halaman tersebut belum cukup kuat
- query-intent yang dibawa belum dijawab secara tajam
- sitemap masih terlalu merata antara halaman kuat dan halaman lemah

### 2. Cluster kota adalah aset utama, tapi harus dibuat lebih unik

Halaman kota saat ini sudah bekerja. Namun banyak halaman kota masih sangat template-driven. Dalam jangka menengah, ini berisiko bikin Google menahan sebagian URL di status discovered bila perbedaan antar halaman tidak cukup kuat.

Yang harus ditekankan per kota:

- paragraf lokal yang benar-benar spesifik
- FAQ lokal
- gejala umum per kota atau area sekitar
- bukti lokal seperti nama area, jalur akses, landmark, atau kebutuhan pengguna setempat

### 3. Cluster intent `biaya`, `cek`, `shockbreaker`, dan `rack steer` harus dibangun

Ini adalah gap paling jelas dari data minggu ini. Query-query tersebut sudah muncul, tetapi halaman yang ada belum cukup menjawab kebutuhan user.

Prioritas intent yang harus dijawab:

1. `biaya servis kaki kaki mobil`
2. `cek kaki kaki mobil`
3. `service shockbreaker mobil`
4. `service rack steer`

### 4. Sitemap dan internal linking perlu jadi lebih strategis

Sitemap saat ini cenderung memperlakukan semua halaman sama rata. Secara teknis ini aman, tetapi secara strategis kurang membantu ketika ada gap kualitas antar URL.

Yang lebih ideal:

- fokuskan crawl discovery ke halaman prioritas dulu
- perkuat internal link dari homepage, `/kota`, dan money pages ke URL yang mau didorong minggu ini
- jangan mengandalkan sitemap sebagai satu-satunya sinyal pentingnya sebuah halaman

## Prioritas Minggu Ini

### Protect

Halaman yang harus dijaga dan diperkuat sekarang juga:

- `/layanan/paket-kaki-kaki`
- `/kota`
- `/kota/bekasi`
- `/kota/surabaya`
- `/kota/medan-1`

### Grow

Halaman yang punya momentum dan layak dipush:

- `/kota/bandung`
- `/kota/jogja`
- `/kota/samarinda`
- `/kota/malang`
- `/kota/palembang`
- `/kota/bali`

### Recover

Halaman yang perlu perbaikan cepat karena intent ada tapi klik belum jalan:

- `/layanan/paket-shockbreaker`
- `/layanan/paket-steering`
- `/kontak`
- `/kota/semarang`

### Ignore untuk minggu ini

Halaman yang tidak perlu jadi prioritas utama pekan ini:

- halaman dengan impresi sangat kecil dan belum dekat ke money intent
- blog umum yang belum mendukung cluster transaksi inti
- halaman yang tidak terkait langsung dengan growth cluster `kota` atau `kaki-kaki`

## Checklist Eksekusi Minggu Ini

## A. Teknis SEO dan hygiene

- [x] Catat di dokumen operasional bahwa redirect `www` ke non-`www` sudah ditangani di level Vercel, supaya tidak terus muncul sebagai action item teknis aktif.
- [x] Audit parameter tracking selesai: `gad_source` dan `gclid` pada halaman normal tidak mengubah konten dan canonical tetap mengarah ke URL bersih; yang perlu dipantau lanjut adalah pola URL noise seperti `/google/?...` di report GSC.
- [x] Tambahkan `metadataBase` di layout global agar sinyal metadata lebih konsisten.
- [x] Split sitemap selesai: `core` tetap di `/sitemap.xml`, cluster kota di `/kota/sitemap.xml`, dan cluster blog di `/blog/sitemap.xml`.
- [x] Audit asset/image URL selesai: `/_next/image` dan folder asset publik non-page yang tidak bernilai SEO kini diarahkan memakai header `X-Robots-Tag: noindex` agar tidak terus menjadi noise indexasi.

## B. Optimasi halaman prioritas

- [x] Revisi title dan meta description `/layanan/paket-kaki-kaki` untuk uji CTR versi tanpa harga di snippet.
- [x] Perkuat copy hero dan section awal `/kota` agar lebih kuat menarget query nasional `bengkel kaki kaki mobil terdekat`.
- [x] Tambahkan konten lokal unik untuk `/kota/bandung`.
- [x] Tambahkan konten lokal unik untuk `/kota/jogja`.
- [x] Tambahkan konten lokal unik untuk `/kota/samarinda`.
- [x] Tambahkan konten lokal unik untuk `/kota/malang`.

## C. Recovery halaman intent penting

- [x] Perkuat `/layanan/paket-shockbreaker` dengan section yang menjawab query `service shockbreaker mobil` dan `service shockbreaker terdekat`.
- [x] Perkuat `/layanan/paket-steering` dengan section yang menjawab query `service rack steer`, `service rack steer terdekat`, dan `repair rack steer`.
- [ ] Tambahkan blok FAQ yang menjawab intent `biaya`, `cek`, dan `berapa lama pengerjaan` pada halaman service utama.
- [ ] Review apakah `/kontak` perlu meta title dan description yang lebih transaksional agar CTR tidak terus melemah.

## D. Internal linking

- [ ] Tambahkan internal link dari homepage ke halaman kota yang sedang naik: Bandung, Jogja, Samarinda, Malang.
- [ ] Tambahkan internal link dari halaman kota ke money page `/layanan/paket-kaki-kaki`.
- [ ] Tambahkan internal link dari halaman service utama ke kota-kota yang sedang tumbuh.
- [ ] Pastikan anchor text lebih jelas, misalnya `bengkel kaki-kaki mobil Bandung` atau `service kaki-kaki mobil Jogja`, bukan anchor generik.

## E. Content opportunity

- [ ] Siapkan satu section atau satu halaman khusus intent `biaya servis kaki kaki mobil`.
- [ ] Siapkan satu section atau satu halaman khusus intent `cek kaki kaki mobil`.
- [ ] Pertimbangkan halaman bantu untuk cluster `shockbreaker` bila recovery lewat section on-page belum cukup.
- [ ] Pertimbangkan halaman bantu untuk cluster `rack steer` bila recovery lewat section on-page belum cukup.

## F. Operasional GSC minggu ini

- [ ] Lakukan URL Inspection untuk 5 URL prioritas setelah update dipublish.
- [ ] Submit sitemap lagi setelah batch perubahan teknis selesai.
- [ ] Pantau apakah URL `www` dan URL parameter mulai berkurang dari report berikutnya.
- [ ] Bandingkan CTR dan impresi pada `/layanan/paket-shockbreaker`, `/layanan/paket-steering`, dan 4 kota prioritas pada minggu depan.

## Urutan Kerja yang Paling Disarankan

Kalau waktu minggu ini terbatas, urutan pengerjaan paling efisien adalah:

1. Rapikan hygiene teknis paling dasar: `www`, parameter URL, metadata base, dan evaluasi sitemap.
2. Optimasi `/kota`, `/layanan/paket-kaki-kaki`, `/layanan/paket-shockbreaker`, dan `/layanan/paket-steering`.
3. Tebalkan keunikan 4 halaman kota yang sedang naik: Bandung, Jogja, Samarinda, Malang.
4. Tambahkan internal link yang lebih agresif dari halaman kuat ke halaman yang ingin didorong.
5. Jalankan URL Inspection hanya untuk URL prioritas, bukan massal.

## Penutup

SEO TJM saat ini sudah punya fondasi yang benar. Situs ini bukan dalam kondisi gagal dicrawl. Yang sedang dibutuhkan adalah disiplin memilih URL mana yang harus diperkuat dulu, lalu membuat setiap halaman prioritas lebih unik, lebih relevan, dan lebih dekat ke intent query yang sudah terbukti muncul di GSC.

Kalau dieksekusi dengan fokus, peluang growth tercepat minggu ini datang dari kombinasi berikut:

- memperkuat halaman kota yang sedang naik
- menaikkan CTR money page utama
- menutup gap intent `biaya`, `cek`, `shockbreaker`, dan `rack steer`
- merapikan URL hygiene supaya crawl budget tidak terbuang ke URL noise
