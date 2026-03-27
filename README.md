# TJM Auto Care Web (Next.js)

Website resmi TJM Auto Care berbasis Next.js App Router.

Dokumen ini disusun untuk memudahkan handover ke developer junior.

## 1. Cara Menjalankan Proyek

### Prasyarat

- Node.js 20+ (disarankan LTS terbaru)
- npm 10+

### Perintah utama

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:3000`.

### Quality check

```bash
npm run lint
npm run test
```

## 2. Struktur Folder Utama

```text
src/
	app/                  -> route halaman (App Router)
	components/           -> komponen UI reusable
	data/                 -> data statis per domain
	lib/                  -> utilitas/helper umum

public/                 -> aset gambar, logo, banner, dll
docs/seo/               -> dokumen SEO & file query operasional
content/posts/          -> arsip konten markdown
tests/                  -> unit test
```

## 3. Alur Kerja Untuk Junior

1. Pahami route dari folder `src/app`.
2. Cari komponen yang dipakai halaman di `src/components/sections`.
3. Kalau ada konten statis, cek `src/data`.
4. Jalankan `npm run lint` dan `npm run test` sebelum commit.

## 4. Konvensi Penamaan (Wajib)

- Gunakan istilah domain full Indonesia untuk halaman bisnis.
- Route wajib konsisten dengan nama domain:
  - `/berita`
  - `/kemitraan`
  - `/layanan`
  - `/tentang-kami`
- Nama file/komponen domain diusahakan deskriptif Indonesia, contoh:
  - `KemitraanHero`
  - `KemitraanKeunggulan`
  - `beritaData`

## 5. Catatan Migrasi Route Lama

Route lama tetap diarahkan otomatis (redirect permanen):

- `/news` -> `/berita`
- `/partnership` -> `/kemitraan`
- `/group` -> `/kemitraan`

Konfigurasi redirect ada di `next.config.mjs`.

## 6. Lokasi File Penting

- Layout global: `src/app/layout.js`
- Navigasi utama: `src/components/Navbar.js`
- Sitemap: `src/app/sitemap.js`
- Util slug: `src/lib/slug.js`
- Konfigurasi test: `vitest.config.mjs`
- Unit test awal: `tests/lib/slug.test.js`

## 7. Checklist Sebelum Merge

1. Tidak ada error lint.
2. Test lulus.
3. Route baru tidak memutus link lama (cek redirect).
4. Nama file dan istilah domain tetap konsisten Indonesia.
