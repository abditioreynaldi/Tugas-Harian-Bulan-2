# Tugas Day 30: Kasir Warung dengan Percabangan

Tugas harian pembelajaran JavaScript: Percabangan (`if`, `else if`, `else`, `switch`, dan Truthy/Falsy).

- **Nama**: Reynaldi Abditio
- **Email**: abditioreynaldi@gmail.com
- **Berkas**: `tugas_day_30.js`

---

## 1 Hal yang Saya Pelajari
Saya mempelajari secara mendalam bagaimana konsep **Truthy dan Falsy** bekerja di JavaScript. Awalnya saya mengira string `"0"` atau array kosong `[]` bernilai falsy karena terkesan "kosong/nol", namun ternyata dalam JavaScript setiap string yang memiliki isi karakter dan semua objek/array adalah **Truthy**. Selain itu, saya memahami kapan fitur *fall-through* pada `switch` statement sengaja dimanfaatkan untuk mengelompokkan beberapa `case` yang memiliki aksi serupa (seperti hari promo akhir pekan atau jumlah hari dalam bulan) tanpa harus mengulang kode.

---

## 1 Hal yang Masih Membingungkan
Hal yang masih cukup menantang adalah membiasakan diri untuk selalu teliti memeriksa urutan evaluasi kondisi numerik pada `if...else if` (misalnya penentuan batas diskon). Sangat mudah terjebak menulis dari angka kecil ke besar jika tidak berhati-hati, yang menyebabkan kondisi terbesar tidak pernah tercapai (*dead code*). Saya juga masih mendalami praktik terbaik (*clean code*) kapan saat yang tepat memilih `switch` dibandingkan menggunakan objek kamus (*lookup object dictionary*) dalam aplikasi skala besar di industri.

---

## Riwayat Git Commit
1. `feat: selesai langkah 1 tebak percabangan`
2. `fix: perbaiki 5 kesalahan langkah 2`
3. `feat: buat program kasir warung dan uji 3 skenario langkah 3`
4. `feat: selesaikan program bonus penentu jumlah hari bulan`
5. `docs: lengkapi readme tugas day 30`
6. 