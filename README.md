# ULIDO Charles & Eva — struktur pengembangan

Website statis GitHub Pages dengan struktur assets, CSS, dan JavaScript terpisah.

## Instalasi
1. Unggah **isi** folder paket ini (bukan folder pembungkusnya) ke root repository `Charles-Eva`.
2. GitHub Pages: branch `main`, folder `/(root)`.
3. Jangan lupa file **assets/images/cover.webp**. GitHub memungkinkan upload folder via drag-and-drop seluruh isi folder.
4. Uji `https://ulidogroup.github.io/Charles-Eva/assets/images/cover.webp` lalu halaman utama.
5. Apabila ada file lama di root (misalnya `cover.webp`, `style.css`, `script.js`), boleh dihapus setelah semuanya teruji.

## Edit
- `config.js` — nama pasangan, tanggal, lokasi, galeri, dan nomor WhatsApp.
- `assets/images/cover.webp` — cover Gorga.
- `assets/gallery/` — galeri (pastikan path foto dimasukkan ke `config.js`).
- `assets/music/` — audio yang berlisensi/diizinkan.
- `css/` — tampilan cover, isi dan dashboard tamu.
- `js/` — fungsi website.
- `admin.html` — generator nama tamu tanpa login.

Catatan: Data daftar tamu di dashboard tersimpan dalam browser customer, bukan database.
