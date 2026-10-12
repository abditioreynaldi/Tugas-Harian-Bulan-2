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

// ==============================================================================
// LANGKAH 3: BIKIN KASIR SENDIRI (35 Poin)
// ==============================================================================

console.log("\n==================================================");
console.log("        LANGKAH 3: BIKIN KASIR SENDIRI            ");
console.log("==================================================");

// Syarat 1: Data awal disimpan dengan let / const yang tepat
const kasirNamaPelanggan = "Rina";
const kasirTotalBelanja = 90000;
const kasirHari = "sabtu";
const kasirJenisMember = "silver";
const kasirKodeVoucher = "SENJA10";
const kasirUangBayar = 100000;

// Syarat 2: Diskon berdasarkan total belanja memakai if...else if...else
let kasirPersenDiskon = 0;
let kasirDiskon = 0;

if (kasirTotalBelanja >= 100000) {
  kasirPersenDiskon = 15;
  kasirDiskon = kasirTotalBelanja * 0.15;
} else if (kasirTotalBelanja >= 50000) {
  kasirPersenDiskon = 10;
  kasirDiskon = kasirTotalBelanja * 0.1;
} else if (kasirTotalBelanja >= 25000) {
  kasirPersenDiskon = 5;
  kasirDiskon = kasirTotalBelanja * 0.05;
} else {
  kasirPersenDiskon = 0;
  kasirDiskon = 0;
}

// Syarat 3: Potongan member ("gold" 5000, "silver" 2000, selain itu 0)
let kasirPotonganMember = 0;
if (kasirJenisMember === "gold") {
  kasirPotonganMember = 5000;
} else if (kasirJenisMember === "silver") {
  kasirPotonganMember = 2000;
} else {
  kasirPotonganMember = 0;
}

// Syarat 4: Promo hari memakai switch ("jumat" 3000, "sabtu" & "minggu" digabung tanpa break 5000, selain itu 0)
let kasirPromoHari = 0;
switch (kasirHari) {
  case "jumat":
    kasirPromoHari = 3000;
    break;
  case "sabtu":
  case "minggu":
    // Kedua case digabung tanpa break untuk memanfaatkan fall-through yang disengaja
    kasirPromoHari = 5000;
    break;
  default:
    kasirPromoHari = 0;
    break;
}

// Syarat 5: Validasi nama memakai Truthy/Falsy
if (kasirNamaPelanggan) {
  console.log(`Pelanggan: ${kasirNamaPelanggan}`);
} else {
  console.log("Nama pelanggan belum diisi");
}

// Syarat 6: Voucher memakai Truthy/Falsy
let kasirPotonganVoucher = 0;
if (kasirKodeVoucher) {
  kasirPotonganVoucher = 2000;
  console.log(`Voucher dipakai: ${kasirKodeVoucher} (Potongan Rp 2.000)`);
} else {
  kasirPotonganVoucher = 0;
  console.log("Voucher tidak dipakai");
}

// Syarat 7: Total akhir belanja
const kasirTotalAkhir =
  kasirTotalBelanja - kasirDiskon - kasirPotonganMember - kasirPromoHari - kasirPotonganVoucher;

// Syarat 8: Status pembayaran memakai if...else if...else
let kasirStatusBayar = "";
if (kasirUangBayar > kasirTotalAkhir) {
  const kembalian = kasirUangBayar - kasirTotalAkhir;
  kasirStatusBayar = `Lunas (Kembalian: Rp ${kembalian.toLocaleString("id-ID")})`;
} else if (kasirUangBayar === kasirTotalAkhir) {
  kasirStatusBayar = "Lunas (uang pas)";
} else {
  const kekurangan = kasirTotalAkhir - kasirUangBayar;
  kasirStatusBayar = `Kurang (Kekurangan: Rp ${kekurangan.toLocaleString("id-ID")})`;
}

// Syarat 9: Cetak dengan template literal rapi
console.log(`
========================================
       STRUK PEMBAYARAN KASIR
========================================
Total Belanja   : Rp ${kasirTotalBelanja.toLocaleString("id-ID")}
Diskon Belanja  : Rp ${kasirDiskon.toLocaleString("id-ID")} (${kasirPersenDiskon}%)
Potongan Member : Rp ${kasirPotonganMember.toLocaleString("id-ID")} (${kasirJenisMember || "Non-member"})
Promo Hari      : Rp ${kasirPromoHari.toLocaleString("id-ID")} (${kasirHari})
Potongan Voucher: Rp ${kasirPotonganVoucher.toLocaleString("id-ID")}
----------------------------------------
Total Akhir     : Rp ${kasirTotalAkhir.toLocaleString("id-ID")}
Uang Bayar      : Rp ${kasirUangBayar.toLocaleString("id-ID")}
Status          : ${kasirStatusBayar}
========================================
`);

// Syarat 10: Uji 3 Skenario Lengkap
/*
 * ------------------------------------------------------------------------------
 * DOKUMENTASI UJI 3 SKENARIO KASIR:
 * ------------------------------------------------------------------------------
 *
 * SKENARIO 1 (Diskon 10%, Hari Akhir Pekan, Bayar Lebih):
 * - Input : nama "Rina", belanja 90000, hari "sabtu", member "silver", voucher "SENJA10", bayar 100000
 * - Hasil Output:
 *   Pelanggan: Rina
 *   Voucher dipakai: SENJA10 (Potongan Rp 2.000)
 *   Total Belanja   : Rp 90.000
 *   Diskon Belanja  : Rp 9.000 (10%)
 *   Potongan Member : Rp 2.000 (silver)
 *   Promo Hari      : Rp 5.000 (sabtu)
 *   Potongan Voucher: Rp 2.000
 *   Total Akhir     : Rp 72.000
 *   Uang Bayar      : Rp 100.000
 *   Status          : Lunas (Kembalian: Rp 28.000)
 *
 * SKENARIO 2 (Diskon 15%, Hari Jumat, Nama Kosong, Voucher Kosong, Bayar Pas):
 * - Input : nama "", belanja 120000, hari "jumat", member "gold", voucher "", bayar 94000
 * - Hasil Output:
 *   Nama pelanggan belum diisi
 *   Voucher tidak dipakai
 *   Total Belanja   : Rp 120.000
 *   Diskon Belanja  : Rp 18.000 (15%)
 *   Potongan Member : Rp 5.000 (gold)
 *   Promo Hari      : Rp 3.000 (jumat)
 *   Potongan Voucher: Rp 0
 *   Total Akhir     : Rp 94.000
 *   Uang Bayar      : Rp 94.000
 *   Status          : Lunas (uang pas)
 *
 * SKENARIO 3 (Diskon 5%, Hari Kerja/Default, Member Umum, Bayar Kurang):
 * - Input : nama "Budi", belanja 40000, hari "senin", member "umum", voucher "HEMAT2K", bayar 30000
 * - Hasil Output:
 *   Pelanggan: Budi
 *   Voucher dipakai: HEMAT2K (Potongan Rp 2.000)
 *   Total Belanja   : Rp 40.000
 *   Diskon Belanja  : Rp 2.000 (5%)
 *   Potongan Member : Rp 0 (umum)
 *   Promo Hari      : Rp 0 (senin)
 *   Potongan Voucher: Rp 2.000
 *   Total Akhir     : Rp 36.000
 *   Uang Bayar      : Rp 30.000
 *   Status          : Kurang (Kekurangan: Rp 6.000)
 * ------------------------------------------------------------------------------
 */

/*
 * ------------------------------------------------------------------------------
 * JAWABAN PERTANYAAN LANGKAH 3:
 * ------------------------------------------------------------------------------
 * 1. Kenapa urutan else if pada diskon dimulai dari angka terbesar? Apa yang terjadi jika dibalik?
 *    Jawaban:
 *    - Karena operator '>=' mencakup seluruh rentang nilai di atasnya.
 *      Jika dibalik (dimulai dari '>= 25000'), maka belanja 150000 akan langsung bernilai true
 *      pada kondisi 25000 dan mendapatkan diskon 5% saja. Kondisi 100000 (15%) yang berada
 *      di bawahnya tidak akan pernah tercapai (menjadi dead code).
 *      Dengan memulai dari ambang terbesar (100000), nilai 100000 ke atas tersaring dulu,
 *      kemudian nilai 50000 - 99999 tersaring berikutnya, lalu 25000 - 49999.
 *
 * 2. Kenapa promo hari lebih cocok memakai switch, bukan if...else if?
 *    Jawaban:
 *    - 'switch' dirancang khusus untuk membandingkan SATU VARIABEL TUNGGAL terhadap
 *      banyak kemungkinan nilai pasti (discrete equality check), seperti nama hari
 *      ("jumat", "sabtu", "minggu"). Kodenya jauh lebih bersih, tidak perlu mengulang
 *      penulisan nama variabel berulang kali ('hari === "jumat" || hari === "sabtu"'),
 *      dan sangat efisien untuk menggabungkan beberapa case sekaligus.
 *
 * 3. Pada switch promo hari, di mana kamu sengaja tidak menulis break, dan kenapa hasilnya tetap benar?
 *    Jawaban:
 *    - Sengaja tidak menulis 'break' di antara 'case "sabtu":' dan 'case "minggu":'.
 *    - Hasilnya tetap benar karena kedua hari tersebut memiliki besaran promo yang SAMA (Rp 5.000).
 *      Ketika nilai hari adalah "sabtu", JavaScript masuk ke case "sabtu" lalu secara sengaja
 *      meluncur (fall-through) ke case "minggu" untuk menetapkan potongan 5000, baru kemudian
 *      berhenti pada 'break' di akhir case "minggu".
 *
 * 4. Sebutkan 3 nilai yang membuat if (namaPelanggan) bernilai false.
 *    Jawaban:
 *    1) String kosong: "" (atau '')
 *    2) Nilai null: null
 *    3) Nilai undefined: undefined (misalnya variabel belum diisi nilai)
 *
 * 5. Jika jumlah beli bernilai -1, apa hasil if (jumlahBeli) dan if (jumlahBeli > 0)? Kenapa berbeda?
 *    Jawaban:
 *    - Hasil 'if (jumlahBeli)'      -> Bernilai TRUE (masuk ke dalam if).
 *    - Hasil 'if (jumlahBeli > 0)'  -> Bernilai FALSE (-1 > 0 bernilai false).
 *    - Alasan kenapa berbeda:
 *      'if (jumlahBeli)' mengevaluasi Truthy/Falsy bawaan JavaScript.
 *      Dalam aturan JavaScript, SATU-SATUNYA angka yang bernilai Falsy adalah 0, -0, dan NaN.
 *      Semua angka selain nol (termasuk angka negatif seperti -1, -50) adalah TRUTHY!
 *      Sedangkan 'if (jumlahBeli > 0)' adalah ekspresi perbandingan matematika murni,
 *      di mana -1 lebih kecil dari 0 sehingga bernilai false.
 * ------------------------------------------------------------------------------
 */

// ==============================================================================
// PENENTU JUMLAH HARI DALAM BULAN
// ==============================================================================

console.log("==================================================");
console.log("    BONUS (+5 POIN): JUMLAH HARI DALAM BULAN      ");
console.log("==================================================");

let angkaBulan = 2; // Contoh uji: bulan Februari (bisa diubah 1 - 12)

switch (angkaBulan) {
  // Bulan dengan 30 hari: April (4), Juni (6), September (9), November (11)
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(`Bulan ${angkaBulan}: 30 hari`);
    break;

  // Bulan Februari: 28 atau 29 hari
  case 2:
    console.log(`Bulan ${angkaBulan}: 28 atau 29 hari (tergantung tahun kabisat)`);
    break;

  // Bulan dengan 31 hari: Januari (1), Maret (3), Mei (5), Juli (7), Agustus (8), Oktober (10), Desember (12)
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(`Bulan ${angkaBulan}: 31 hari`);
    break;

  // Angka di luar 1 - 12
  default:
    console.log("Bulan tidak valid");
    break;
}

/*
 * ------------------------------------------------------------------------------
 * PENJELASAN PERNYATAAN BONUS:
 * Kenapa bisa menggabungkan beberapa case tanpa break di antaranya?
 * Jawaban:
 * Di JavaScript, jika suatu 'case' tidak memiliki pernyataan 'break', mesin JavaScript
 * akan melakukan 'fall-through' (meluncur ke bawah) dan terus mengeksekusi case berikutnya
 * tanpa memeriksa kecocokan nilai lagi sampai ia menjumpai kata kunci 'break' atau mencapai
 * akhir blok switch.
 * Karena bulan 4, 6, 9, dan 11 semuanya memiliki hasil yang identik yaitu 30 hari,
 * kita dapat menumpuk keempat case tersebut secara berurutan dan hanya menaruh satu
 * baris kode aksi serta satu 'break' di case terakhir (case 11).
 * Hal ini adalah teknik resmi (pattern) dalam switch-case yang membuat kode jauh lebih
 * ringkas, elegan, dan terhindar dari duplikasi kode (DRY - Don't Repeat Yourself).
 * ------------------------------------------------------------------------------
 */