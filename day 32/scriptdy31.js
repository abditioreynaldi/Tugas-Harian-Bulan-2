/*
 * ==============================================================================
 * TUGAS DAY 32: KASIR WARUNG DENGAN ARRAY DAN FUNCTION
 * Nama Siswa : Reynaldi Abditio
 * Topik      : Array, Array Methods, Function Declaration, Expression, Arrow Function
 * ==============================================================================
 */

// ==============================================================================
// LANGKAH 1: TEBAK DULU, BARU CEK
// ==============================================================================
console.log("==================================================");
console.log("        LANGKAH 1: TEBAK DULU, BARU CEK           ");
console.log("==================================================");

// --- POTONGAN A ---
console.log("--- Potongan A ---");
let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");
let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();
menu.splice(1, 1);
let irisan = menu.slice(1, 3);

// Tebakan Saya:
// console.log(terakhirDibuang)  -> "Jus" (karena push("Jus") menaruh di akhir, lalu pop() mengambil item terakhir)
// console.log(pertamaDibuang)   -> "Air" (karena unshift("Air") menaruh di depan, lalu shift() mengambil item pertama)
// console.log(menu)             -> ["Kopi", "Roti", "Susu"] (setelah splice(1, 1) menghapus "Teh" di indeks 1)
// console.log(irisan)           -> ["Roti", "Susu"] (slice dari indeks 1 sampai sebelum indeks 3)
// console.log(menu.indexOf("Susu")) -> 2 (posisi "Susu" sekarang berada di indeks 2)
// console.log(menu.indexOf("Nasi")) -> -1 ("Nasi" tidak ditemukan dalam array)
// console.log(menu.includes("Kopi")) -> true ("Kopi" ada di dalam array menu)
// console.log(menu[menu.length - 1]) -> "Susu" (elemen terakhir array adalah indeks 2 yaitu "Susu")

console.log(terakhirDibuang);
console.log(pertamaDibuang);
console.log(menu);
console.log(irisan);
console.log(menu.indexOf("Susu"));
console.log(menu.indexOf("Nasi"));
console.log(menu.includes("Kopi"));
console.log(menu[menu.length - 1]);

// Hasil Asli Console:
// Jus
// Air
// [ 'Kopi', 'Roti', 'Susu' ]
// [ 'Roti', 'Susu' ]
// 2
// -1
// true
// Susu

// --- POTONGAN B ---
console.log("\n--- Potongan B ---");
function tambah(a, b) {
  return a + b;
}

function cetakTambah(a, b) {
  console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);

// Tebakan Saya:
// console.log(x) -> 5 (karena fungsi tambah mengembalikan nilai a + b via return)
// console.log(y) -> undefined (karena fungsi cetakTambah hanya mencetak ke layar tanpa return, sehingga nilainya undefined)

console.log(x);
console.log(y);

// Hasil Asli Console:
// 5 (dari baris cetakTambah di dalam pemanggilan)
// 5 (nilai x)
// undefined (nilai y)

// --- POTONGAN C ---
console.log("\n--- Potongan C ---");
const hitungDiskonPersen = (harga, persen = 10) => harga - (harga * persen) / 100;

// Tebakan Saya:
// console.log(hitungDiskonPersen(50000, 20)) -> 40000 (diskon 20% dari 50.000 = 10.000, 50.000 - 10.000 = 40.000)
// console.log(hitungDiskonPersen(50000))     -> 45000 (karena persen tidak diisi, memakai nilai default persen = 10, diskon 5.000 = 45.000)
console.log(hitungDiskonPersen(50000, 20));
console.log(hitungDiskonPersen(50000));

function cekAngka(n) {
  if (n < 0) {
    return "negatif";
    console.log("Baris ini muncul atau tidak?");
  }
  return "bukan negatif";
}

// Tebakan Saya:
// console.log(cekAngka(-5)) -> "negatif" (baris console.log di bawah return TIDAK akan muncul karena eksekusi fungsi langsung berhenti)
// console.log(cekAngka(5))  -> "bukan negatif"
console.log(cekAngka(-5));
console.log(cekAngka(5));

// Hasil Asli Console:
// 40000
// 45000
// negatif
// bukan negatif

/*
 * ==============================================================================
 * JAWABAN PERTANYAAN LANGKAH 1
 * ==============================================================================
 * 1. Kenapa `menu` dan `irisan` isinya berbeda? Mana method yang mengubah array aslinya, dan mana yang tidak?
 *    Jawab: `menu` dan `irisan` berbeda karena `slice(1, 3)` bekerja dengan menyalin porsi elemen dari indeks 1
 *    hingga sebelum indeks 3 tanpa memodifikasi array aslinya.
 *    - Method yang mengubah array asli (Mutating): push(), unshift(), pop(), shift(), splice().
 *    - Method yang TIDAK mengubah array asli (Non-mutating): slice(), indexOf(), includes().
 *
 * 2. Pada Potongan B, apa beda `tambah` dan `cetakTambah`? Kenapa `y` bernilai `undefined`?
 *    Jawab: Fungsi `tambah` mengembalikan nilai hasil penjumlahan ke pemanggil menggunakan kata kunci `return`,
 *    sehingga dapat disimpan ke variabel `x`. Sedangkan `cetakTambah` hanya menampilkan teks ke console tanpa
 *    mengembalikan nilai apa pun, sehingga JavaScript secara otomatis memberikan nilai `undefined` pada variabel `y`.
 *
 * 3. Pada Potongan C, kenapa `hitungDiskonPersen(50000)` tetap menghasilkan angka? Apakah baris console.log tercetak?
 *    Jawab: `hitungDiskonPersen(50000)` tetap menghasilkan angka 45000 karena parameter kedua memiliki nilai
 *    default (`persen = 10`), sehingga saat argumen kedua tidak diberikan, JavaScript otomatis memakai 10%.
 *    Baris `console.log("Baris ini muncul atau tidak?")` TIDAK pernah tercetak (dead code) karena kata kunci
 *    `return` seketika menghentikan eksekusi seluruh sisa kode di dalam blok fungsi tersebut.
 *
 * Catatan Tebakan:
 * Tebakan yang menurut saya paling memerlukan ketelitian adalah melacak urutan operasi array pada Potongan A
 * (push -> unshift -> pop -> shift -> splice), karena pergeseran indeks akibat unshift dan splice harus
 * dihitung cermat agar tidak salah menentukan hasil slice dan indexOf berikutnya.
 */

// ==============================================================================
// LANGKAH 2: PERBAIKI 7 KESALAHAN
// ==============================================================================
console.log("\n==================================================");
console.log("        LANGKAH 2: PERBAIKI 7 KESALAHAN           ");
console.log("==================================================");

let daftarBelanja = ["Kopi", "Teh", "Roti"];

// FIX 1: Mengganti unshift() menjadi push(). unshift() menambah item di awal indeks 0, sedangkan instruksi meminta menambahkan "Susu" di akhir daftar.
// daftarBelanja.unshift("Susu"); // SALAH
daftarBelanja.push("Susu");

// FIX 2: Mengganti slice() menjadi splice(1, 1). Method slice() tidak mengubah array asli melainkan membuat salinan, sedangkan splice() memotong dan menghapus 1 elemen langsung dari array asli di indeks 1 ("Teh").
// daftarBelanja.slice(1, 1); // SALAH
daftarBelanja.splice(1, 1);

// FIX 3: Mengganti indexOf() menjadi includes(). indexOf() mengembalikan angka indeks (1), sedangkan hasil yang diharapkan adalah nilai boolean true.
// let adaRoti = daftarBelanja.indexOf("Roti"); // SALAH (mengembalikan 1)
let adaRoti = daftarBelanja.includes("Roti");

// FIX 4: Memperbaiki indeks off-by-one dari daftarBelanja.length menjadi daftarBelanja.length - 1, karena indeks array berbasis nol (0-indexed).
// let terakhir = daftarBelanja[daftarBelanja.length]; // SALAH (mengembalikan undefined)
let terakhir = daftarBelanja[daftarBelanja.length - 1];

// FIX 5: Menambahkan kata kunci 'return' pada function declaration hitungDiskon agar mengembalikan nilai hasil perhitungan, bukan undefined.
function hitungDiskon(harga, persen) {
  // harga - (harga * persen) / 100; // SALAH (tanpa return)
  return harga - (harga * persen) / 100;
}

// FIX 6: Menambahkan kata kunci 'return' pada arrow function dengan kurung kurawal (block body) hitungPajak.
const hitungPajak = (subtotal) => {
  // subtotal * 0.11; // SALAH (tanpa return)
  return subtotal * 0.11;
};

// FIX 7: Memindahkan deklarasi arrow function hitungTotal ke sebelum baris pemanggilannya. Variabel const tidak mengalami hoisting fungsi dan berada dalam Temporal Dead Zone (TDZ), sehingga memanggil sebelum inisialisasi memicu ReferenceError.
const hitungTotal = (subtotal, pajak) => subtotal + pajak;

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));
console.log(hitungTotal(80000, 8800));

/*
 * ==============================================================================
 * JAWABAN PERTANYAAN LANGKAH 2
 * ==============================================================================
 * 1. Ringkasan 7 Kesalahan dan Perbaikannya:
 *    - Kesalahan 1: Menggunakan unshift() untuk menambah item akhir; perbaikannya menggunakan push().
 *    - Kesalahan 2: Menggunakan slice() untuk menghapus elemen asli; perbaikannya menggunakan splice(1, 1).
 *    - Kesalahan 3: Menggunakan indexOf() yang menghasilkan angka; perbaikannya menggunakan includes() agar bernilai boolean true.
 *    - Kesalahan 4: Mengakses indeks daftarBelanja.length (out of bounds); perbaikannya menggunakan daftarBelanja.length - 1.
 *    - Kesalahan 5: Kurang kata kunci return pada function declaration hitungDiskon; perbaikannya menambahkan return.
 *    - Kesalahan 6: Kurang kata kunci return pada arrow function ber-kurung kurawal hitungPajak; perbaikannya menambahkan return.
 *    - Kesalahan 7: Memanggil arrow function hitungTotal sebelum dideklarasikan; perbaikannya mendefinisikan const hitungTotal sebelum pemanggilan.
 *
 * 2. Klasifikasi Error vs Hasil Salah:
 *    - Menyebabkan Error di Console (Fatal): Kesalahan 7 (ReferenceError: Cannot access 'hitungTotal' before initialization).
 *    - Tidak Error tetapi Hasilnya Salah (Logic/Semantic): Kesalahan 1, 2, 3, 4, 5, dan 6.
 *
 * 3. Kenapa hitungDiskon dan hitungPajak sama-sama menghasilkan undefined?
 *    Jawab: Di JavaScript, baik function declaration biasa maupun arrow function dengan blok kurung kurawal ({}),
 *    jika tidak menyertakan kata kunci `return` eksplisit, secara otomatis akan mengembalikan nilai primitif `undefined`.
 */