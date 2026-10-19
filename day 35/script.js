// ==========================================
// LANGKAH 1: TEBAK DULU, BARU CEK
// ==========================================

/* Potongan A
Tebakan:
- dalam() akan cetak "Dalam"
- console.log(nama) di luar dalam() tapi di dalam luar() akan cetak "Luar"
- console.log(nama) paling akhir (global) akan cetak "Global"
- hitung(100) akan cetak 100 - 10 - 5 = 85
*/
const nama = "Global";

function luar() {
  const nama = "Luar";

  function dalam() {
    const nama = "Dalam";
    console.log(nama); // Asli: Dalam
  }

  dalam();
  console.log(nama); // Asli: Luar
}

luar();
console.log(nama); // Asli: Global

const diskonGlobal = 10;

function hitung(harga) {
  const diskonLokal = 5;
  return harga - diskonGlobal - diskonLokal;
}

console.log(hitung(100)); // Asli: 85

if (true) {
  let pesanBlok = "di dalam blok";
  console.log(pesanBlok); // Asli: di dalam blok
}

for (let i = 0; i < 2; i++) {
  console.log("putaran", i); 
  // Asli: putaran 0, putaran 1
}

// Percobaan Error:
// console.log(pesanBlok); // ERROR: ReferenceError: pesanBlok is not defined
// console.log(i); // ERROR: ReferenceError: i is not defined

/* Potongan B
Tebakan:
- console.log(sapa()) akan cetak "Halo!"
- console.log(warna) pertama akan cetak undefined (hoisting var)
- console.log(warna) kedua akan cetak "biru"
*/
console.log(sapa()); // Asli: Halo!

function sapa() {
  return "Halo!";
}

console.log(warna); // Asli: undefined
var warna = "biru";
console.log(warna); // Asli: biru

// Percobaan Error:
// console.log(lokasi); 
// const lokasi = "Sleman"; 
// ERROR: ReferenceError: Cannot access 'lokasi' before initialization

// console.log(salam()); 
// const salam = function () { return "Hai"; };
// ERROR: ReferenceError: Cannot access 'salam' before initialization

/* Potongan C
Tebakan:
- penghitungA() 1 = 1
- penghitungA() 2 = 2
- penghitungA() 3 = 3
- penghitungB() 1 = 1
- penghitungA() 4 = 4
*/
function buatPenghitung() {
  let hitungan = 0;

  return function () {
    hitungan++;
    return hitungan;
  };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

console.log(penghitungA()); // Asli: 1
console.log(penghitungA()); // Asli: 2
console.log(penghitungA()); // Asli: 3
console.log(penghitungB()); // Asli: 1
console.log(penghitungA()); // Asli: 4

/* Jawaban Pertanyaan Langkah 1:
1. Potongan A: `console.log(nama)` berbeda karena masing-masing berada di scope yang berbeda dan ter-shadow oleh deklarasi `const nama` baru di dalamnya. `hitung` bisa memakai `diskonGlobal` karena variable tersebut ada di global scope sehingga dapat diakses dari mana saja. `pesanBlok` dan `i` error karena mereka dideklarasikan dengan `let` yang bersifat block-scoped, jadi tidak bisa diakses dari luar kurung kurawal `{}` mereka.
2. Potongan B: `sapa()` bisa dipanggil karena function declaration di-hoisting sepenuhnya ke atas scope. `warna` bernilai `undefined` karena deklarasi `var` di-hoisting, tetapi inisialisasi nilainya tidak[cite: 2]. `lokasi` dan `salam` error karena `const` masuk ke dalam Temporal Dead Zone (TDZ) sebelum baris deklarasinya tereksekusi.
3. Potongan C: `penghitungA` bertambah terus berkat closure; inner function menyimpan dan merujuk 'hitungan' di lexical scope-nya, mencegahnya dihapus memori[cite: 2]. `penghitungB` mulai dari 1 lagi karena setiap pemanggilan `buatPenghitung()` menciptakan scope dan memori baru yang sepenuhnya terpisah[cite: 2].
*/

// ==========================================
// LANGKAH 2: PERBAIKI 8 KESALAHAN
// ==========================================

// 1. Cek stok
const stok = 10;
let pesanStok = ""; // FIX: Deklarasikan 'pesanStok' di luar blok if agar dikenali di scope console.log
if (stok > 5) {
  pesanStok = "Stok aman"; // FIX: Isi nilai dari variabel luar
}
console.log(pesanStok);

// 2. Potongan 10%
function hitungPotongan(harga) {
  const potongan = harga * 0.1;
  return harga - potongan;
}
const hasilPotong = hitungPotongan(50000); 
console.log(hasilPotong); // FIX: console.log tidak bisa akses 'potongan' dalam fungsi, log nilai kembalian fungsinya.

// 3. Sambutan
const sambutan2 = function () {
  return "Selamat datang di Kedai Senja";
};
console.log(sambutan2()); // FIX: function expression const tak terhoisting, pindah pemanggilan ke bawah deklarasi. (Ubah nama jadi sambutan2 biar gak nabrak).

// 4. Kota
let kota = "Yogyakarta";
console.log(kota); // FIX: pindahkan pemanggilan log ke bawah let karena 'let' terkena TDZ dan tidak bisa dipanggil sebelumnya.

// 5. Total awal 100000
let total = 100000; // FIX: Gunakan 'let' di global
if (true) {
  let total = 90000; // FIX: Gunakan 'let' juga agar ia terbatas pada scope blok (block-scoped) dan tidak menimpa let di luar
}
console.log(total);

// 6. Saldo kas
let saldoKasGlobal = 100000; 
function tambahKas(jumlah) {
  // FIX: Hapus deklarasi ulang variabel lokal. Langsung mutasikan variabel dari luar (tambah 'Global' pd nama biar tidak menimpa blok var).
  saldoKasGlobal += jumlah; 
}
tambahKas(50000);
console.log(saldoKasGlobal);

// 7. Nomor antrean
function buatAntrean() {
  let nomor = 0; // FIX: pindahkan inisialisasi let keluar dari return function agar scope-nya dipegang sebagai closure, bukan di-reset jadi 0 terus menerus.
  return function () {
    nomor++;
    return nomor;
  };
}
const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// 8. Dompet
function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    belanja(jumlah) {
      saldo -= jumlah;
    },
    cekSaldo() {
      return saldo; // FIX: Hapus 'this.' karena 'saldo' direferensikan langsung dari lexical scope fungsi (closure), bukan dari properti object.
    },
  };
}
const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());

/* Jawaban Pertanyaan Langkah 2:
1. Daftar perbaikan kesalahan:
- `let pesanStok` terperangkap di scope blok; solusinya angkat deklarasinya keluar if.
- Variabel lokal `potongan` diakses di luar; solusinya log hasil kembalian (return) fungsinya.
- `sambutan()` dipanggil sebelum function expression `const`; solusinya panggil di bawah.
- `console.log(kota)` dipanggil sebelum inisialisasi `let`; solusinya panggil di bawah let.
- `var total = 90000` bocor ke luar blok; solusinya ganti `var` dengan `let` agar block-scoped.
- `let saldoKas = 0` men-shadowing variabel luar; solusinya hapus deklarasi `let` di dalam fungsinya.
- `let nomor = 0` ter-reset setiap kali fungsi inner dipanggil; solusinya pindahkan ke atas/luar return.
- `this.saldo` di return memanggil properti object yang tidak ada; solusinya panggil langsung variabel `saldo` dari closure.
2. Error di console: `pesanStok`, `potongan`, `sambutan`, dan `kota`[cite: 2]. Tidak error tetapi salah hasil: `total`, `saldoKas`, `nomor antrean`, dan `this.saldo`.
3. Karena `let saldoKas = 0;` mendeklarasikan variabel baru di scope lokal (shadowing), mengisolasi perubahan dari variabel global di luarnya[cite: 2]. Istilahnya: Variable Shadowing.
4. Karena `this.saldo` mencari properti bernama `saldo` *di dalam object* return, padahal `saldo` adalah *variabel lokal* dari fungsi `buatDompet`, bukan properti object tersebut[cite: 2].
*/