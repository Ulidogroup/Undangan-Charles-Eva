# PANDUAN PEMASANGAN — ULIDO CHARLES & EVA

Masalah screenshot: file css/style.css, css/admin.css, js/script.js, js/admin.js dan assets/images/cover.webp belum berada pada folder yang diminta index.html dan admin.html.

## Cara paling mudah: GitHub Desktop (direkomendasikan)
1. Instal GitHub Desktop, login akun pemilik repository.
2. File → Clone repository → pilih `ulidogroup/Charles-Eva`.
3. Di Windows Explorer, buka folder hasil clone.
4. Ekstrak ZIP ini; salin semua isi hasil ekstraksi (termasuk direktori css, js, assets) ke folder repository, izinkan replace.
5. Di GitHub Desktop, pastikan folder css/, js/, assets/images/ ikut terdaftar dalam Changes. Commit to main → Push origin.
6. Tes website dan gambar di https://ulidogroup.github.io/Charles-Eva/assets/images/cover.webp .

## Alternatif tanpa GitHub Desktop (melalui browser GitHub)
GitHub → repository → Add file → Create new file: ketik `css/.gitkeep`, isi `placeholder`, Commit changes. Ulangi untuk `js/.gitkeep` dan `assets/images/.gitkeep`.
Masuk folder `css` di halaman GitHub, klik Add file → Upload files, lalu unggah `style.css` dan `admin.css` dari folder hasil ekstraksi.
Masuk folder `js`, unggah `script.js` dan `admin.js`.
Masuk folder `assets/images`, unggah `cover.webp`.
Terakhir pada halaman root unggah `index.html`, `admin.html`, `config.js` dan README.md.
Pastikan asset yang berhasil dimuat. Hapus file css/js lama di root jika sudah tak dipakai (opsional).

## Path yang dipakai
index.html menggunakan `css/style.css`, `config.js`, `js/script.js`, `assets/images/cover.webp`.
admin.html menggunakan `css/admin.css` dan `js/admin.js`.
Penting: jangan unggah folder induk ZIP ke repository; seluruh isinya harus berada pada root.
