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