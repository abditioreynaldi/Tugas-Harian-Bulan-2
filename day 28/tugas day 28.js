// ====================================================================
// LANGKAH 1: TEBAK 
// ====================================================================

console.log("=== LANGKAH 1: TEBAK DULU, BARU CEK ===");

// 1. Prioritas operator perkalian (*) lebih tinggi dari penjumlahan (+)
// Tebakan: 13
// Hasil asli: 13 ✔
console.log(7 + 3 * 2);

// 2. Tanda kurung () memprioritaskan penjumlahan terlebih dahulu
// Tebakan: 20
// Hasil asli: 20 ✔
console.log((7 + 3) * 2);

// 3. Modulo (%) menghasilkan sisa pembagian 17 dibagi 5 (3 sisa 2)
// Tebakan: 2
// Hasil asli: 2 ✔
console.log(17 % 5);

// 4. Eksponensiasi (**) menghitung 2 pangkat 3 (2 * 2 * 2)
// Tebakan: 8
// Hasil asli: 8 ✔
console.log(2 ** 3);

// 5. Perbandingan sama dengan longgar (==) melakukan konversi tipe data otomatis
// Tebakan: true
// Hasil asli: true ✔
console.log(5 == "5");

// 6. Perbandingan identik ketat (===) memeriksa nilai dan tipe data sekaligus
// Tebakan: false
// Hasil asli: false ✔
console.log(5 === "5");

// 7. Logika AND (&&) bernilai false karena salah satu operand false
// Tebakan: false
// Hasil asli: false ✔
console.log(true && false);

// 8. Logika OR (||) bernilai true karena salah satu operand true
// Tebakan: true
// Hasil asli: true ✔
console.log(true || false);

// 9. Logika NOT (!) membalik nilai boolean dari true menjadi false
// Tebakan: false
// Hasil asli: false ✔
console.log(!true);

// 10. (10 > 5) bernilai true, namun (3 > 8) bernilai false; true && false adalah false
// Tebakan: false
// Hasil asli: false ✔
console.log(10 > 5 && 3 > 8);

/*
 * JAWABAN PERTANYAAN LANGKAH 1:
 * 1. Tebakan paling menantang:
 *    Tebakan yang paling menantang adalah perbedaan antara 5 == "5" dan 5 === "5",
 *    karena kita harus ingat bahwa JavaScript secara implisit mengubah tipe data
 *    pada operator loose equality (==), sedangkan strict equality (===) membedakan tipe.
 * 
 * 2. Kenapa 7 + 3 * 2 hasilnya 13, bukan 20?
 *    Karena operator perkalian (*) memiliki derajat prioritas (precedence) yang lebih tinggi
 *    daripada penjumlahan (+), sehingga 3 * 2 dihitung lebih dulu menjadi 6, baru ditambah 7.
 * 
 * 3. Kenapa 5 == "5" bernilai true, tetapi 5 === "5" bernilai false?
 *    Karena operator == melakukan pemaksaan tipe (type coercion) dengan mengubah string "5"
 *    menjadi number 5 sebelum membandingkan. Sedangkan operator === mengecek nilai dan tipe data,
 *    sehingga tipe number (5) dan tipe string ("5") dianggap tidak sama.
 */

// ====================================================================
// LANGKAH 2: PERBAIKI 4 KESALAHAN 
// ====================================================================

console.log("\n=== LANGKAH 2: PERBAIKI 4 KESALAHAN ===");

const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = 51000; // FIX 2: Diubah dari tipe string "51000" menjadi number 51000 agar konsisten dengan tipe totalPesanan

// Total 2 kopi + 2 teh. Seharusnya: 51000
// FIX 1: Gunakan tanda kurung (hargaKopi + hargaTeh) * 2 agar kedua item dikali 2,
// sebelumnya hanya hargaTeh yang dikali 2 sehingga totalnya salah menjadi 33000.
let totalPesanan = (hargaKopi + hargaTeh) * 2;

// Uang diterima sama persis dengan total? Seharusnya: true
// FIX 2 (lanjutan): Gunakan strict equality (===) untuk memastikan nilai dan tipe datanya sama persis.
let uangPas = uangDiterima === totalPesanan;

// Tambah 1 member baru. Seharusnya jumlahMember jadi 6
// FIX 3: Tambahkan operator penugasan += 1 (atau jumlahMember++),
// sebelumnya hanya ekspresi 'jumlahMember + 1' tanpa menyimpan hasilnya kembali ke variabel.
jumlahMember += 1;

// Dapat diskon jika sudah member ATAU total lebih dari 100000. Seharusnya: true
// FIX 4: Ganti operator AND (&&) menjadi operator OR (||) sesuai syarat 'sudah member ATAU total > 100000'.
let dapatDiskon = sudahMember || totalPesanan > 100000;

// Output yang diharapkan: 51000 true 6 true
console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);

/*
 * JAWABAN PERTANYAAN LANGKAH 2:
 * 1. Rangkuman 4 kesalahan dan solusinya:
 *    - Kesalahan 1: Pada totalPesanan, perkalian hanya mengalikan hargaTeh; solusinya tambahkan kurung `(hargaKopi + hargaTeh) * 2`.
 *    - Kesalahan 2: Pada uangPas, uangDiterima bertipe string "51000"; solusinya ubah menjadi tipe number `51000` (atau gunakan `Number(uangDiterima) === totalPesanan`).
 *    - Kesalahan 3: Pada penambahan member, tidak ada penugasan nilai kembali; solusinya pakai operator `jumlahMember += 1`.
 *    - Kesalahan 4: Pada dapatDiskon, operator yang dipakai adalah `&&` (dan); solusinya ganti dengan `||` (atau).
 * 
 * 2. Kenapa jika `==` diganti `===` pada uangPas aslinya bernilai false?
 *    Karena variabel uangDiterima bertipe data String ("51000"), sedangkan totalPesanan bertipe Number (51000).
 *    Operator === tidak mengonversi tipe data, sehingga tipe string tidak sama dengan tipe number.
 *    Agar bernilai true, ubah variabel menjadi number `uangDiterima = 51000` atau gunakan `Number(uangDiterima) === totalPesanan`.
 * 
 * 3. Perbedaan && (AND) dan || (OR):
 *    Operator `&&` memerlukan semua kondisi bernilai true untuk menghasilkan true, sedangkan `||` cukup salah satu kondisi saja yang true.
 *    Pada contoh dapatDiskon, karena pembeli sudah member (true) meskipun belanja belum di atas 100.000 (false),
 *    menggunakan `||` menghasilkan true, sedangkan jika menggunakan `&&` hasilnya akan false.
 */
