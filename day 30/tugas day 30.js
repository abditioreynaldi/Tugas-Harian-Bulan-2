/*
 * ==============================================================================
 * TUGAS DAY 30: KASIR WARUNG DENGAN PERCABANGAN
 * Nama Siswa : Reynaldi Abditio
 * Topik      : if, else if, else, switch, dan Truthy / Falsy
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
// Tebakan Saya:
// 1: tidak masuk (0 adalah angka nol, bernilai Falsy)
// 2: masuk       ("0" adalah string yang ada isinya, bernilai Truthy)
// 3: tidak masuk ("" adalah string kosong, bernilai Falsy)
// 4: masuk       ([] adalah object array, di JavaScript semua objek bernilai Truthy)
// 5: tidak masuk (null adalah nilai primitif khusus yang bernilai Falsy)
// 6: masuk       (-1 adalah angka non-nol, bernilai Truthy)
// Output tebakan : "2: masuk", "4: masuk", "6: masuk"

if (0) {
  console.log("1: masuk");
}
if ("0") {
  console.log("2: masuk");
}
if ("") {
  console.log("3: masuk");
}
if ([]) {
  console.log("4: masuk");
}
if (null) {
  console.log("5: masuk");
}
if (-1) {
  console.log("6: masuk");
}
// Hasil Asli Console:
// 2: masuk
// 4: masuk
// 6: masuk
// Evaluasi: Seluruh tebakan tepat 100%!

// --- POTONGAN B ---
console.log("\n--- Potongan B ---");
let belanja = 120000;

// Tebakan Saya:
// Meskipun belanja bernilai 120000, kondisi pertama adalah belanja >= 25000.
// Karena 120000 >= 25000 bernilai TRUE, JavaScript akan langsung masuk ke blok pertama
// dan mengabaikan seluruh else if di bawahnya.
// Output tebakan: "Diskon 5%"

if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}
// Hasil Asli Console:
// Diskon 5%
// Evaluasi: Tebakan tepat. Karena urutan kondisi salah, logika tidak mencapai diskon 15%.

// --- POTONGAN C ---
console.log("\n--- Potongan C ---");
let hari = "sabtu";

// Tebakan Saya:
// Variabel hari bernilai "sabtu".
// Case "sabtu" cocok dan mencetak "Promo Akhir Pekan".
// Namun karena TIDAK ADA break pada case "sabtu", eksekusi akan tembus (fall-through)
// ke case "minggu" dan ikut mencetak "Promo Keluarga", baru kemudian berhenti karena ada break.
// Output tebakan:
// Promo Akhir Pekan
// Promo Keluarga

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
    break;
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}
// Hasil Asli Console:
// Promo Akhir Pekan
// Promo Keluarga
// Evaluasi: Tebakan tepat. Terjadi fenomena fall-through karena lupa break.

/*
 * ------------------------------------------------------------------------------
 * JAWABAN PERTANYAAN LANGKAH 1:
 * ------------------------------------------------------------------------------
 * 1. Pada Potongan A, kenapa "0" dan [] tetap masuk ke dalam if, padahal terlihat seperti kosong?
 *    Jawaban:
 *    - "0" adalah tipe data string yang memiliki panjang 1 karakter (bukan string kosong "").
 *      Dalam aturan JavaScript, HANYA string kosong ("") yang bernilai Falsy.
 *      Setiap string yang memiliki panjang >= 1 (termasuk "0", "false", bahkan spasi " ")
 *      selalu dikonversi menjadi Truthy.
 *    - [] adalah sebuah Array. Di JavaScript, semua Object dan Array (baik kosong maupun terisi)
 *      menempati ruang alamat memori referensi objek dan secara mutlak selalu bernilai Truthy.
 *      Nilai Falsy di JavaScript hanya ada 8 nilai spesifik:
 *      false, 0, -0, 0n, "", null, undefined, dan NaN.
 *
 * 2. Pada Potongan B, belanja bernilai 120000 tetapi hasilnya bukan "Diskon 15%".
 *    Kenapa? Bagaimana cara memperbaikinya?
 *    Jawaban:
 *    - Penyebab: JavaScript mengeksekusi percabangan if...else if secara berurutan
 *      dari atas ke bawah. Saat memeriksa kondisi pertama 'belanja >= 25000',
 *      nilai 120000 sudah menghasilkan nilai true (120000 >= 25000). Begitu satu
 *      kondisi bernilai true, JavaScript langsung menjalankan blok tersebut lalu
 *      SEKETIKA KELUAR dari seluruh rangkaian if-else tanpa pernah mengecek kondisi berikutnya.
 *    - Cara memperbaikinya: Urutkan kondisi batas nilai dari YANG TERBESAR ke YANG TERKECIL:
 *      if (belanja >= 100000) {
 *        console.log("Diskon 15%");
 *      } else if (belanja >= 50000) {
 *        console.log("Diskon 10%");
 *      } else if (belanja >= 25000) {
 *        console.log("Diskon 5%");
 *      } else {
 *        console.log("Tidak ada diskon");
 *      }
 *
 * 3. Pada Potongan C, kenapa yang tercetak dua baris? Apa yang harus ditambahkan agar
 *    hanya satu baris yang tercetak?
 *    Jawaban:
 *    - Penyebab: Terjadi fenomena 'fall-through' pada switch statement. Di dalam blok
 *      case "sabtu", tidak dituliskan kata kunci 'break;'. Akibatnya, setelah menjalankan
 *      perintah console.log pada case "sabtu", program tidak keluar melainkan bablas
 *      mengeksekusi baris kode pada case "minggu" berikutnya.
 *    - Yang harus ditambahkan: Tambahkan pernyataan 'break;' di dalam case "sabtu"
 *      (dan sebaiknya juga di case "jumat") agar setelah blok selesai, program langsung keluar.
 * ------------------------------------------------------------------------------
 */