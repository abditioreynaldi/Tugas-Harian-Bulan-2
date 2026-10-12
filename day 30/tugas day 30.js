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

// ==============================================================================
// LANGKAH 2: PERBAIKI 5 KESALAHAN (25 Poin)
// ==============================================================================

console.log("\n==================================================");
console.log("        LANGKAH 2: PERBAIKI 5 KESALAHAN           ");
console.log("==================================================");

let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// FIX 1: Membalik urutan if-else dari nilai batas terbesar (100000 -> 50000 -> 25000).
// Sebelumnya dimulai dari 25000 sehingga totalBelanja 80000 salah masuk ke 5% (4000) bukannya 10% (8000).
if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.1;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// FIX 2: Memperbaiki typo variabel 'jenismember' (huruf kecil) menjadi 'jenisMember' (camelCase) agar tidak ReferenceError.
// FIX 3: Menambahkan pernyataan 'break;' pada case "gold" agar nilainya tidak bablas tertimpa menjadi 2000 (case silver).
switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break; // FIX 3: Tambahkan break di sini
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// FIX 4: Mengganti operator assignment (=) menjadi operator kesetaraan ketat (===).
// Sebelumnya 'kodeVoucher = ""' menugaskan nilai string kosong yang bersifat Falsy,
// sehingga if bernilai false dan salah masuk ke blok else.
if (kodeVoucher === "") {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// Total akhir. Seharusnya: 67000 (80000 - 8000 - 5000 = 67000)
let totalAkhir = totalBelanja - diskon - potonganMember;

// Pembayaran dengan uang pas. Seharusnya tercetak: Status: Lunas
let uangBayar = 67000;
// FIX 5: Mengubah operator perbandingan dari '>' menjadi '>=' agar saat uang pas (67000 >= 67000), status tetap Lunas.
if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

/*
 * ------------------------------------------------------------------------------
 * JAWABAN PERTANYAAN LANGKAH 2:
 * ------------------------------------------------------------------------------
 * 1. Tulis ke-5 kesalahan tadi dalam satu kalimat singkat masing-masing:
 *    - Kesalahan 1: Urutan pengecekan diskon terbalik dari kecil ke besar,
 *      perbaikannya mengurutkan kondisi dari nilai tertinggi (100000 lalu 50000 lalu 25000).
 *    - Kesalahan 2: Typo penulisan nama variabel 'jenismember' (huruf m kecil),
 *      perbaikannya disesuaikan dengan deklarasi awal yaitu 'jenisMember' (camelCase).
 *    - Kesalahan 3: Kurang kata kunci 'break;' pada case "gold",
 *      perbaikannya menambahkan 'break;' agar nilai 5000 tidak tertimpa menjadi 2000 oleh case silver.
 *    - Kesalahan 4: Penulisan 'kodeVoucher = ""' menggunakan satu tanda sama dengan (assignment),
 *      perbaikannya diganti menjadi perbandingan ketat 'kodeVoucher === ""'.
 *    - Kesalahan 5: Operator pembanding 'uangBayar > totalAkhir' tidak mencakup kondisi uang pas,
 *      perbaikannya diganti dengan operator lebih besar sama dengan 'uangBayar >= totalAkhir'.
 *
 * 2. Mana kesalahan yang menyebabkan error di console, dan mana yang tidak error tetapi hasilnya salah?
 *    - Menyebabkan ERROR di console (Runtime / ReferenceError):
 *      * Kesalahan 2: 'switch (jenismember)' memicu "ReferenceError: jenismember is not defined"
 *        sehingga program langsung berhenti mendadak.
 *    - TIDAK error tetapi HASILNYA SALAH (Logic Bug):
 *      * Kesalahan 1: Diskon terhitung 4000 (5%) bukan 8000 (10%).
 *      * Kesalahan 3: Potongan gold tertimpa menjadi 2000 karena fall-through.
 *      * Kesalahan 4: Kondisi selalu masuk ke else karena hasil assignment "" bernilai falsy.
 *      * Kesalahan 5: Uang pas 67000 dianggap "Status: Kurang" karena 67000 tidak lebih besar dari 67000.
 *
 * 3. Pada if (kodeVoucher = ""), apa bedanya '=', '==', dan '==='? Kenapa kodenya tidak error?
 *    - Beda operator:
 *      * '='   : Operator Penugasan (Assignment). Mengisi nilai di ruas kanan ke variabel di ruas kiri.
 *      * '=='  : Operator Kesetaraan Longgar (Loose Equality). Membandingkan nilai dengan melakukan
 *                konversi tipe data otomatis (type coercion) terlebih dahulu jika tipenya berbeda.
 *      * '===' : Operator Kesetaraan Ketat (Strict Equality). Membandingkan nilai dan tipe data sekaligus
 *                tanpa melakukan konversi tipe. Jika tipenya berbeda, langsung bernilai false.
 *    - Kenapa kodenya tidak error:
 *      Di JavaScript, operasi penugasan (assignment expression) mengembalikan nilai yang ditugaskan.
 *      Ekspresi '(kodeVoucher = "")' berhasil menugaskan string kosong dan menghasilkan nilai '""'.
 *      Karena '""' (string kosong) adalah nilai Falsy, maka pernyataan 'if ("")' secara sintaks
 *      sah dievaluasi sebagai 'if (false)'. JavaScript tidak mengalami SyntaxError, melainkan
 *      langsung melompat dan mengeksekusi blok 'else'.
 * ------------------------------------------------------------------------------
 */