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
// ==========================================
// LANGKAH 3 & BONUS: BIKIN KASIR SENDIRI
// ==========================================

const kasirKedai = {
  nama: "Kedai Senja",
  kota: "Yogyakarta",
  saldoKas: 0,
  jamOperasional: { buka: "08:00", tutup: "21:00" },
  menu: [
    { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
    { nama: "Roti Bakar", kategori: "makanan", harga: 15000, stok: 3 },
    { nama: "Es Teh", kategori: "minuman", harga: 5000, stok: 20 },
    { nama: "Mie Rebus", kategori: "makanan", harga: 12000, stok: 15 },
    { nama: "Kopi Hitam", kategori: "minuman", harga: 10000, stok: 8 }
  ],
  keranjang: [],

  cariHarga(namaMenu) {
    for (let item of this.menu) {
      if (item.nama === namaMenu) return item.harga;
    }
    return 0;
  },

  tambahKeKeranjang(namaMenu, jumlah) {
    for (let item of this.menu) {
      if (item.nama === namaMenu && item.stok >= jumlah) {
        this.keranjang.push({ nama: namaMenu, jumlah: jumlah });
        item.stok -= jumlah;
        return true;
      }
    }
    return false;
  },

  hitungSubtotal() {
    let subtotal = 0;
    for (let item of this.keranjang) {
      subtotal += this.cariHarga(item.nama) * item.jumlah;
    }
    return subtotal;
  },

  hitungDiskon(subtotal) {
    if (subtotal >= 100000) return subtotal * 0.15;
    if (subtotal >= 50000) return subtotal * 0.10;
    if (subtotal >= 25000) return subtotal * 0.05;
    return 0;
  },

  cetakStruk() {
    console.log(`\n=== STRUK ${this.nama.toUpperCase()} ===`);
    let subtotal = this.hitungSubtotal();
    let diskon = this.hitungDiskon(subtotal);
    let dpp = subtotal - diskon; // Dasar Pengenaan Pajak
    let pajak = dpp * 0.11;
    let total = dpp + pajak;

    let nomor = 1;
    for (let item of this.keranjang) {
      let hargaSatuan = this.cariHarga(item.nama);
      console.log(`${nomor++}. ${item.nama} (x${item.jumlah}) - Rp${hargaSatuan * item.jumlah}`);
    }
    
    console.log("----------------------");
    console.log(`Subtotal : Rp${subtotal}`);
    console.log(`Diskon   : Rp${diskon}`);
    console.log(`Pajak 11%: Rp${pajak}`);
    console.log(`Total    : Rp${total}`);
    
    this.saldoKas += total;
    this.keranjang = []; // Kosongkan keranjang setelah struk dicetak
  },

  // BONUS: menuMenipis
  menuMenipis() {
    let menipis = [];
    for (let item of this.menu) {
      if (item.stok < 5) menipis.push(item.nama);
    }
    return menipis;
  }
};

// 7. Properti dinamis[cite: 1]
let webKey = "website";
kasirKedai[webKey] = "www.kedaisenja.com";
console.log(`Ada properti website? ${webKey in kasirKedai}`); // true
console.log(kasirKedai[webKey]);
delete kasirKedai[webKey];
console.log(`Ada properti website setelah dihapus? ${webKey in kasirKedai}`); // false

// 8. for...in[cite: 1]
console.log("\n--- Jam Operasional ---");
for (let key in kasirKedai.jamOperasional) {
  console.log(`${key}: ${kasirKedai.jamOperasional[key]}`);
}

console.log("\n--- Info Menu Pertama ---");
for (let key in kasirKedai.menu[0]) {
  console.log(`${key}: ${kasirKedai.menu[0][key]}`);
}

// 9. Object.keys dan Object.values[cite: 1]
console.log("\nKeys Jam:", Object.keys(kasirKedai.jamOperasional));
console.log("Values Jam:", Object.values(kasirKedai.jamOperasional));

// 10. Hitung huruf 'a'[cite: 1]
let jumlahA = 0;
for (let char of kasirKedai.nama) {
  if (char === 'a') jumlahA++;
}
console.log(`\nJumlah huruf 'a' pada nama kedai: ${jumlahA}`);

// 11. Uji Skenario[cite: 1]

// Kegagalan 1: Menu tidak ada
let gagal1 = kasirKedai.tambahKeKeranjang("Ayam Goreng", 1);
console.log(`Tambah menu tidak ada: ${gagal1}`); // false

// Kegagalan 2: Stok kurang
let gagal2 = kasirKedai.tambahKeKeranjang("Roti Bakar", 5);
console.log(`Tambah menu lebih dari stok: ${gagal2}`); // false

// Skenario 1: Belanja lebih dari 50000 (Diskon 10%)
kasirKedai.tambahKeKeranjang("Kopi Susu", 2);  // 36000
kasirKedai.tambahKeKeranjang("Roti Bakar", 1); // 15000
kasirKedai.cetakStruk();
// Hasil struk skenario 1:
// 1. Kopi Susu (x2) - Rp36000
// 2. Roti Bakar (x1) - Rp15000
// Subtotal : Rp51000
// Diskon   : Rp5100
// Pajak 11%: Rp5049
// Total    : Rp50949

// Skenario 2: Belanja lebih dari 100000 (Diskon 15%)
kasirKedai.tambahKeKeranjang("Mie Rebus", 10); // 120000
kasirKedai.tambahKeKeranjang("Es Teh", 2);     // 10000
kasirKedai.cetakStruk();
// Hasil struk skenario 2:
// 1. Mie Rebus (x10) - Rp120000
// 2. Es Teh (x2) - Rp10000
// Subtotal : Rp130000
// Diskon   : Rp19500
// Pajak 11%: Rp12155
// Total    : Rp122655

// Uji Bonus
console.log("\nMenu yang stoknya menipis:", kasirKedai.menuMenipis());
// Hasilnya berbeda karena Roti Bakar (sisa 2) dan Mie Rebus (sisa 5) berkurang akibat skenario 1 dan 2.

/*
Jawaban Pertanyaan Langkah 3:
1. Dot notation dipakai saat nama properti diketahui dan paten (contoh: `this.nama`). Bracket notation wajib dipakai saat nama properti bersifat dinamis dari sebuah variabel atau string berspasi (contoh: `kasirKedai[webKey]`).[cite: 1]
2. Harus menggunakan `this.saldoKas` agar scope-nya mengarah ke properti di dalam object tersebut. Jika tanpa `this`, program akan mencari variabel global `saldoKas` dan menyebabkan `ReferenceError: saldoKas is not defined`.[cite: 1]
// PERCOBAAN: hitungSubtotal() { saldoKas += 10; } -> ReferenceError
3. `for...of` dipakai untuk mengambil elemen aktual dalam iterabel seperti array (contoh: loop `this.keranjang`), sedangkan `for...in` dipakai untuk mengambil nama kunci/properti dari object (contoh: loop `jamOperasional`). Keduanya tidak bisa ditukar pada tipe data yang salah.[cite: 1]
4. Object literal tidak memiliki iterator bawaan. Error: `TypeError: kasirKedai is not iterable`.[cite: 1]
5. `Object.keys` menghasilkan array berisi nama-nama properti (contoh: `['buka', 'tutup']`), sedangkan `Object.values` menghasilkan array nilainya (contoh: `['08:00', '21:00']`).[cite: 1]
6. `cariHarga` dan `hitungSubtotal` harus me-return nilai agar bisa digunakan oleh method lain sebagai bahan kalkulasi. `cetakStruk` hanya menampilkan data sehingga tidak wajib me-return. Jika `hitungSubtotal` hanya `console.log`, total struk akan bernilai NaN karena tidak ada angka yang diproses lebih lanjut.[cite: 1]
*/