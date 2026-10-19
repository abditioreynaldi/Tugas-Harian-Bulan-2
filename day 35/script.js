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