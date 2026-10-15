// tugas_day_33

// ============================
// LANGKAH 1 : TEBAK DULU, BARU CEK
// ============================

// ----Potongan A----
const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };
produk.harga = 20000;
produk.kategori = "Minuman";
delete produk.stok;
let kunci = "nama";

// Tebakan: Kopi Susu
// Hasil Asli: Kopi Susu
console.log(produk.nama);

// TEbakan: Kopi Susu
// Hasil Asli: Kopi Susu
console.log(produk[kunci]);

// Tebakan: 20000
// Hasil Asli: 20000
console.log(produk["harga"]);

// Tebakan Undefined (karena properti stok sudah dihapus)
// Hasil Asli: Undefined
console.log(produk["stok"]);

// Tebakan: True (karena properti kategori sudah ditambahkan)
// Hasil Asli: True
console.log("kategori" in produk);

// Tebakan: False (karena properti stok sudah dihapus)
// Hasil Asli: False
console.log("stok" in produk);

// Tebakan: ['nama', 'harga', 'kategori']
// Hasil Asli: ['nama', 'harga', 'kategori']
console.log(Object.keys(produk));

// Tebakan: ['Kopi Susu', 20000, 'Minuman']
// Hasil Asli: ['Kopi Susu', 20000, 'Minuman']
console.log(Object.values(produk));

/*
Jawaban Pertanyaan Potongan A:
1. 'produk.nama' mengakses properti secara langsung secara dot notation, sehingga menghasilkan nilai "Kopi Susu".
2. 'produk[kunci]' mengakses properti secara dinamis menggunakan bracket notation, di mana kunci adalah variabel yang berisi string "nama", sehingga menghasilkan nilai "Kopi Susu".
3. 'produk["harga"]' mengakses properti harga menggunakan bracket notation, sehingga menghasilkan nilai 20000.
4. 'produk["stok"]' mengakses properti stok menggunakan bracket notation, tetapi properti stok sudah dihapus, sehingga menghasilkan nilai undefined.
5. '"kategori" in produk' memeriksa apakah properti kategori ada dalam objek produk, sehingga menghasilkan nilai true.
6. '"stok" in produk' memeriksa apakah properti stok ada dalam objek produk, tetapi properti stok sudah dihapus, sehingga menghasilkan nilai false.
*/

// Potongan B
const dompet ={
    pemilik: "Rina",
    saldo: 50000,
    belanja(jumlah) {
        this.saldo -= jumlah;
        return this.saldo;
    },
    cekSaldo() {
        console.log(this.pemilik + ": Rp" + this.saldo);
    },      
};

// Tebakan: 30000
// Hasil Asli: 30000
let sisa = dompet.belanja(20000);
console.log(sisa);

// Tebakan: Rina: Rp30000
// Hasil Asli: Rina: Rp30000
dompet.cekSaldo();

// Tebakan: akan mengurangi saldo menjadi 20000 tapi tidak dicetak karena tidak ada console.log
// Hasil Asli: (tidak ada output langsung  dari belanja, tapi saldo berkurang)
dompet.belanja(10000);

// Tebakan: Rina: Rp20000
// Hasil Asli: Rina: Rp20000
dompet.cekSaldo();

/*Jawaban Pertanyaan Potongan B:
1. 'dompet.belanja(20000)' karena pemanggilan 'dompet.belanja(10000)' tetap mengeksekusi operasi 'this.saldo -= jumlah' yang memodifikasi data inernal object, meskipun hasil kembalianya tidak disimpan. 'this' merujuk pada object 'dompet' itu sendiri tempat method tersebut dipanggil.
*/
// --- Potongan C ---
const hari = ["Senin", "Selasa"];

// Tebakan: Senin \n Selasa
// Hasil Asli: Senin \n Selasa
for (let nilai of hari) {
  console.log(nilai);
}

// Tebakan: 0 \n 1
// Hasil Asli: 0 \n 1
for (let indeks in hari) {
  console.log(indeks);
}

const kopi = { nama: "Kopi", harga: 18000 };

// Tebakan: nama: Kopi \n harga: 18000
// Hasil Asli: nama: Kopi \n harga: 18000
for (let kolom in kopi) {
  console.log(kolom + ": " + kopi[kolom]);
}

// Tebakan: K \n o \n p \n i
// Hasil Asli: K \n o \n p \n i
for (let huruf of "Kopi") {
  console.log(huruf);
}

// PERCOBAAN ERROR:
// for (let x of kopi) { console.log(x); }
// Pesan Error: TypeError: kopi is not iterable

/*
Jawaban Pertanyaan Potongan C:
3. `for...in` menelusuri kunci (key/index) dari suatu iterabel, dan pada array kuncinya adalah indeks berupa angka (0, 1). `for...of` pada object `kopi` menghasilkan error karena object literal secara bawaan tidak bersifat "iterable" sehingga tidak bisa dilooping langsung menggunakan `for...of`.[cite: 1]
*/


// ==========================================
// LANGKAH 2: PERBAIKI 7 KESALAHAN
// ==========================================

const warung = {
  nama: "Warung Senja",
  saldoKas: 100000,

  tambahKas(jumlah) {
    // FIX 1: tambahkan 'this.' agar merujuk ke properti object[cite: 1]
    this.saldoKas += jumlah;
  },

  ambilKas(jumlah) {
    this.saldoKas -= jumlah;
    // FIX 2: tambahkan return agar mengembalikan sisa saldo[cite: 1]
    return this.saldoKas;
  },
};

warung.tambahKas(50000);
console.log(warung.saldoKas); 
console.log(warung.ambilKas(30000)); 

const kontak = { "no-wa": "08123" };
// FIX 3: Gunakan bracket notation untuk key yang memiliki karakter khusus (tanda hubung)[cite: 1]
console.log(kontak["no-wa"]);

const akun = { nama: "Rina", kataSandi: "abc123" };
// FIX 4: Gunakan operator delete untuk benar-benar menghapus properti[cite: 1]
delete akun.kataSandi;
console.log(akun);

const menu = ["Kopi", "Teh", "Roti"];
// FIX 5: Gunakan for...of untuk mendapatkan nilai dari dalam array, bukan indeks[cite: 1]
for (let item of menu) {
  console.log(item);
}

const info = { nama: "Warung Senja", kota: "Yogyakarta" };
// FIX 6: Gunakan for...in karena info adalah object, for...of akan error[cite: 1]
for (let kolom in info) {
  console.log(kolom + ": " + info[kolom]);
}

// FIX 7: Typo pada pemanggilan method, seharusnya Object.keys (pakai 's')[cite: 1]
console.log(Object.keys(info));

/*
Jawaban Pertanyaan Langkah 2:
1. Kesalahan 1: `saldoKas` kurang `this.` diperbaiki jadi `this.saldoKas`.
   Kesalahan 2: `ambilKas` tidak mengembalikan nilai, diperbaiki dengan menambah `return`.
   Kesalahan 3: `kontak.no-wa` salah penulisan (dianggap pengurangan), diperbaiki pakai bracket `kontak["no-wa"]`.
   Kesalahan 4: `akun.kataSandi = undefined` tidak menghapus kunci, diperbaiki dengan `delete akun.kataSandi`.
   Kesalahan 5: `for...in` di array mencetak indeks, diperbaiki pakai `for...of`.
   Kesalahan 6: `for...of` di object menyebabkan error iterable, diperbaiki pakai `for...in`.
   Kesalahan 7: `Object.key` adalah nama fungsi yang salah, diperbaiki jadi `Object.keys`.
2. Kesalahan yang menyebabkan error: 3 (SyntaxError), 6 (TypeError), 7 (TypeError). Kesalahan hasilnya salah: 1, 2, 4, 5.[cite: 1]
3. `akun.kataSandi = undefined` hanya mengubah nilainya, properti tetap ada (`"kataSandi" in akun` bernilai true). `delete akun.kataSandi` menghilangkan properti sepenuhnya (`"kataSandi" in akun` bernilai false).[cite: 1]
*/
