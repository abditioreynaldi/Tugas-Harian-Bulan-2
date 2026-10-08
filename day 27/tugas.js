// ======================================================
// TUGAS JAVASCRIPT - VARIABEL, TIPE DATA, DAN OBJECT
// Nama : Reynaldi
// ======================================================

// ======================================================
// LANGKAH 1 : PERBAIKI KODE AWAL
// ======================================================

// Program pencatatan data usaha
// Dibuat oleh rekan sebelumnya

const namaUsaha = "Kopi Senja";
const kotaUsaha = "Yogyakarta";

// FIX: tahunBerdiri diubah menjadi number agar bisa dihitung
const tahunBerdiri = 2020;

const TARIF_PAJAK = 0.11;

let statusBuka = true;

// FIX: deklarasi website cukup sekali
let website = null;

var jumlahProduk = 3;

let produk = ["Kopi Susu", "Es Teh Manis", "Roti Bakar"];
let hargaProduk = [18000, 7500, 15000];

// FIX: nama variabel harus sama persis
console.log(namaUsaha);

// FIX: console huruf kecil
console.log("Kota: " + kotaUsaha);

console.log("Tahun berdiri berikutnya: " + (tahunBerdiri + 1));

// FIX: const tidak boleh diubah, baris TARIF_PAJAK = 0.12 dihapus

// FIX: operator perkalian menggunakan *
let hargaKopiSetelahPajak = hargaProduk[0] * (1 + TARIF_PAJAK);

console.log("Harga kopi + pajak: " + hargaKopiSetelahPajak);

let hargaTermurah = Math.min(
  hargaProduk[0],
  hargaProduk[1],
  hargaProduk[2]
);

console.log("Termurah: " + hargaTermurah);

console.log("Produk ke-4: " + produk[3]);

// FIX: komentar ditutup dengan benar
console.log("Status buka: " + statusBuka);

/*

==================== CATATAN BUG ====================

No | Bagian | Jenis | Penyebab | Perbaikan

1 | let website; let website = null; | Error |
    Deklarasi let dua kali |
    Menyisakan satu deklarasi

2 | console.log(namausaha); | Error |
    Nama variabel berbeda huruf besar-kecil |
    Menjadi namaUsaha

3 | Console.log(...) | Error |
    JavaScript mengenal console, bukan Console |
    Menjadi console.log

4 | "2020" + 1 | Tidak error tapi salah |
    String digabung dengan angka |
    Diubah menjadi number

5 | TARIF_PAJAK = 0.12 | Error |
    Konstanta tidak boleh diubah |
    Baris dihapus

6 | hargaProduk[0] x (...) | Error |
    Operator x tidak ada |
    Diganti *

7 | Komentar tidak ditutup | Error |
    Parser membaca sampai akhir file |
    Menambahkan penutup komentar

8 | produk[3] | Tidak error |
    Index tidak tersedia |
    Menghasilkan undefined

=====================================================

Mengapa namausaha dan namaUsaha dianggap berbeda?

Karena JavaScript bersifat case-sensitive sehingga huruf besar
dan huruf kecil dianggap berbeda.

Mengapa TARIF_PAJAK = 0.12 ditolak?

Karena TARIF_PAJAK dibuat dengan const sehingga nilainya
tidak dapat diubah setelah deklarasi.

Mengapa "2020" + 1 menghasilkan "20201"?

Karena "2020" bertipe string sehingga operator +
melakukan penggabungan teks.

Perbaikan yang dipilih:
const tahunBerdiri = 2020;

*/


// ======================================================
// LANGKAH 2 : BENAHI STRUKTUR DATA
// ======================================================

const usaha = {
  namaUsaha: "Kopi Senja",
  pemilik: "Reynaldi",
  kota: "Yogyakarta",
  tahunBerdiri: 2020,
  statusBuka: true,
  nomorWhatsApp: "08123456789",
  website: null
};

const daftarProduk = [
  {
    nama: "Kopi Susu",
    harga: 18000
  },
  {
    nama: "Es Teh Manis",
    harga: 7500
  },
  {
    nama: "Roti Bakar",
    harga: 15000
  },
  {
    nama: "Matcha Latte",
    harga: 22000
  }
];

console.log(usaha.namaUsaha);

console.log(usaha["kota"]);

console.log("Produk pertama:", daftarProduk[0].nama);

console.log(
  "Produk terakhir:",
  daftarProduk[daftarProduk.length - 1].nama
);

/*

Mengapa nomor WhatsApp lebih tepat disimpan sebagai string?

Karena nomor telepon tidak digunakan untuk perhitungan matematika
dan bisa memiliki angka nol di depan.

Mengapa website diberi null?

Karena website memang belum ada nilainya.

Perbedaan:
undefined = belum diberi nilai.
null = sengaja diberi nilai kosong.

Mengapa daftarProduk[4] tidak berisi produk ke-4?

Karena array dimulai dari index 0.

Index:
0 = produk pertama
1 = produk kedua
2 = produk ketiga
3 = produk keempat

daftarProduk[4] menghasilkan undefined.

*/


// ======================================================
// LANGKAH 3 : PERHITUNGAN DAN TAMPILAN
// ======================================================

const tahunSekarang = 2026;

const usiaUsaha = tahunSekarang - usaha.tahunBerdiri;

const hargaSetelahPajak = daftarProduk.map(
  produk => produk.harga * (1 + TARIF_PAJAK)
);

const daftarHargaPajak = hargaSetelahPajak.map(
  harga => Math.round(harga)
);

const termurah = Math.min(...daftarHargaPajak);
const termahal = Math.max(...daftarHargaPajak);

console.log(`
===== KARTU USAHA =====

Nama Usaha : ${usaha.namaUsaha}
Pemilik    : ${usaha.pemilik}
Kota       : ${usaha.kota}
Usia Usaha : ${usiaUsaha} tahun
Status     : ${usaha.statusBuka ? "Buka" : "Tutup"}
Website    : ${usaha.website ?? "Belum Ada"}

Daftar Produk (Harga + PPN 11%)
`);

daftarProduk.forEach((item, index) => {
  console.log(
    `${index + 1}. ${item.nama} : Rp ${Math.round(
      item.harga * (1 + TARIF_PAJAK)
    )}`
  );
});

console.log(`
Termurah : Rp ${termurah}
Termahal : Rp ${termahal}
=======================
`);

/*

Alasan memilih const dan let:

const digunakan karena sebagian besar nilai tidak berubah.

const usaha
const daftarProduk
const tahunSekarang
const usiaUsaha

Karena referensinya tidak diganti selama program berjalan.

Perhitungan manual:

Kopi Susu = Rp18.000
PPN = 11%

18.000 × 1,11
= 19.980

Hasil program = 19.980

Sama.

Apakah hasil yang sudah tercetak berubah otomatis?

Tidak.

Contoh:

daftarProduk[0].harga = 50000;

Output yang sudah tercetak sebelumnya tidak berubah.
Program harus dijalankan kembali agar hasil baru dihitung lagi.

*/


// ======================================================
// LANGKAH 4 : DETEKTIF TIPE DATA
// ======================================================

// Tebakan: number
console.log(typeof 42);
// Hasil asli: number ✔

// Tebakan: string
console.log(typeof "42");
// Hasil asli: string ✔

// Tebakan: boolean
console.log(typeof true);
// Hasil asli: boolean ✔

// Tebakan: undefined
console.log(typeof undefined);
// Hasil asli: undefined ✔

// Tebakan: object
console.log(typeof null);
// Hasil asli: object ✔

// Tebakan: object
console.log(typeof [1, 2, 3]);
// Hasil asli: object ✔

// Tebakan: object
console.log(typeof { nama: "Budi" });
// Hasil asli: object ✔

// Tebakan: 53
console.log("5" + 3);
// Hasil asli: 53 ✔

// Tebakan: 15
console.log("5" * 3);
// Hasil asli: 15 ✔

// Tebakan: NaN
console.log("abc" * 2);
// Hasil asli: NaN ✔

// Tebakan: Infinity
console.log(10 / 0);
// Hasil asli: Infinity ✔

// Tebakan: object
console.log(typeof usaha.website);
// Hasil asli: object ✔

/*

Penjelasan typeof null

Walaupun hasilnya object,
null sebenarnya bukan object.

Itu adalah bug lama di JavaScript yang dipertahankan
agar kode lama tidak rusak.

Mengapa "5" + 3 dan "5" * 3 berbeda?

Operator + melakukan penggabungan string.

"5" + 3 menjadi "53"

Operator * memaksa JavaScript mengubah string
menjadi angka.

"5" * 3 menjadi 15.

*/


// ======================================================
// LANGKAH 5 : MODIFIKASI DADAKAN
// ======================================================

daftarProduk.push({
  nama: "Mie Goreng",
  harga: 12000
});

usaha.instagram = "@kopisenja";

let totalHarga = 0;

for (const item of daftarProduk) {
  totalHarga += item.harga;
}

console.log("Instagram :", usaha.instagram);
console.log("Total harga semua produk : Rp", totalHarga);

/*

Bagian yang perlu diubah:

1. Array daftarProduk
2. Object usaha
3. Perhitungan total harga

Yang tidak perlu diubah:

1. Struktur object usaha
2. Konstanta pajak
3. Tahun berdiri

Karena tidak berhubungan dengan fitur baru.

Contoh statement:

totalHarga += item.harga;

usaha.instagram = "@kopisenja";

Contoh expression:

item.harga * (1 + TARIF_PAJAK)

Dievaluasi menjadi:
19980

tahunSekarang - usaha.tahunBerdiri

Dievaluasi menjadi:
6

*/


// ======================================================
// BONUS
// ======================================================

if (true) {
  var contohVar = "Saya var";
  let contohLet = "Saya let";
}

console.log(contohVar);

// console.log(contohLet);
// Error karena let hanya berlaku dalam blok

var data = "lama";
var data = "baru";

console.log(data);

// let nama = "A";
// let nama = "B";
// Error karena let tidak boleh dideklarasikan ulang

/*

Skenario bug nyata:

Dalam aplikasi besar, programmer membuat
variabel var total di beberapa file berbeda.

Karena var bisa dideklarasikan ulang,
nilai lama bisa tertimpa tanpa sengaja.

Akibatnya total transaksi atau laporan
keuangan menjadi salah dan sulit dilacak.

*/