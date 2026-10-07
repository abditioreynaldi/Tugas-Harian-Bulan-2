```text
================================================================================
JAWABAN TUGAS GIT, CONVENTIONAL COMMITS, DAN WEB DEVELOPMENT
================================================================================

1. PENYEBAB & SKENARIO MERGE CONFLICT
--------------------------------------------------------------------------------
Merge Conflict terjadi ketika Git tidak dapat menggabungkan perubahan antar-branch 
sebab terdapat dua modifikasi yang saling berbenturan pada baris kode yang sama.

2 Situasi Pemicu:
  a. Dua pengembang mengubah baris kode yang sama pada file yang sama secara 
     bersamaan di branch berbeda.
  b. Satu pengembang menghapus suatu file, sementara pengembang lain sedang 
     mengedit isi file tersebut.

Contoh Skenario Nyata:
  Andi dan Budi mengambil kode terbaru dari branch main. Andi mengubah warna 
  tombol pada baris ke-10 file `style.css` menjadi biru di branch `feature-blue`. 
  Di saat yang sama, Budi mengubah baris ke-10 pada file `style.css` yang sama 
  menjadi merah di branch `feature-red`. Saat Budi melakukan merge setelah Andi 
  berhasil merge kodenya ke main, Git akan mengalami konflik pada baris ke-10.


2. MEMAHAMI PENANDA KONFLIK (CONFLICT MARKERS)
--------------------------------------------------------------------------------
a. Arti Penanda Konflik:
   - <<<<<<< HEAD   : Menandai awal dari kode yang ada di branch aktif saat ini.
   - =======        : Pembatas antara versi kode branch aktif dan branch yang digabung.
   - >>>>>>> branch-teman : Menandai akhir dari kode yang berasal dari branch yang digabung.

b. Versi Branch Aktif : <h1 style="color: red;">Selamat Datang</h1>
c. Versi Branch Datang : <h1 style="color: blue;">Selamat Datang</h1>


3. CARA MENYELESAIKAN MERGE CONFLICT
--------------------------------------------------------------------------------
A. Melalui Visual Studio Code (GUI):
   1. Buka file yang berkonflik di VS Code.
   2. Gunakan tombol CodeLens yang muncul di atas konflik:
      - "Accept Current Change" (pakai versi branch aktif)
      - "Accept Incoming Change" (pakai versi branch yang datang)
      - "Accept Both Changes" (pakai kedua versi)
   3. Simpan file (Ctrl + S).

B. Melalui Editor Teks Manual (Terminal/Notepad):
   1. Buka file berkonflik di editor teks biasa.
   2. Cari penanda konflik (<<<<<<<, =======, >>>>>>>).
   3. Hapus baris kode yang tidak dipakai serta hapus seluruh baris penanda konflik.
   4. Simpan file.

Mengapa VS Code Direkomendasikan untuk Pemula?
  VS Code memberikan antarmuka visual berwarna (highlighting), tombol aksi instan 
  (Accept Current/Incoming), serta panel kontrol Git bawaan sehingga mengurangi 
  risiko salah hapus penanda konflik secara manual.


4. URUTAN PERINTAH SETELAH MENYELESAIKAN KONFLIK
--------------------------------------------------------------------------------
1. git status
   Fungsi: Memeriksa daftar file yang berkonflik dan memastikan seluruh konflik 
   telah ditandai sebagai terselesaikan.

2. git add .
   Fungsi: Memasukkan file yang sudah diperbaiki konflik-nya ke Staging Area.

3. git commit -m "fix: menyelesaikan merge conflict pada halaman utama"
   Fungsi: Menyimpan hasil resolusi konflik secara permanen ke dalam basis data 
   repository.


5. FUNGSI PERINTAH GIT MERGE --ABORT
--------------------------------------------------------------------------------
Fungsi: Membatalkan proses merge yang sedang berjalan dan mengembalikan kondisi 
Working Directory serta repository ke keadaan persis sebelum perintah `git merge` 
dijalankan.

Situasi Nyata Penggunaan:
  Saat terjadi merge conflict yang sangat rumit dan melibatkan puluhan file, lalu 
  kamu sadar bahwa branch-mu belum siap untuk digabung atau kamu ingin merapikan 
  kode di branch-mu terlebih dahulu sebelum mencoba merge kembali.


6. 4 PRAKTIK BEST PRACTICE MEMINIMALKAN MERGE CONFLICT
--------------------------------------------------------------------------------
1. Rutin melakukan `git pull` dari branch main.
   Alasan: Memastikan kode lokal selalu mutakhir sehingga perubahan kecil rekan 
   tim langsung diserap tanpa menumpuk konflik besar di akhir.

2. Buat branch fitur dengan cakupan kecil dan spesifik (Atomic Branches).
   Alasan: Semakin singkat umur sebuah branch, semakin sedikit potensi perubahan 
   kode yang berbenturan dengan branch lain.

3. Komunikasi intensif antar-anggota tim.
   Alasan: Mencegah dua orang mengerjakan file atau modul yang sama pada waktu 
   yang bersamaan.

4. Lakukan merge secepat mungkin setelah fitur selesai.
   Alasan: Menghindari branch "mengendap" terlalu lama yang membuatnya tertinggal 
   jauh dari versi utama proyek.


7. PENTINGNYA PESAN COMMIT & CONTOHNYA
--------------------------------------------------------------------------------
Pentingnya Pesan Commit:
  Pesan commit yang jelas bertindak sebagai dokumentasi proyek, memudahkan audit 
  kode, mempercepat proses penelusuran bug, dan membantu rekan tim memahami 
  maksud perubahan tanpa harus membaca seluruh baris kode.

3 Contoh Pesan Commit yang Buruk:
  1. "fix"
  2. "update kode"
  3. "revisi lagi bismillah"

3 Contoh Pesan Commit yang Baik:
  1. "feat: menambahkan verifikasi OTP via WhatsApp"
  2. "fix: merapikan tata letak tombol submit pada layar seluler"
  3. "docs: memperbarui dokumentasi instalasi pada README.md"


8. FORMAT CONVENTIONAL COMMITS
--------------------------------------------------------------------------------
Format Standar: <tipe>[cakupan opsional]: <deskripsi>

4 Tipe Commit Utama & Fungsinya:
1. feat: Menambahkan fitur baru ke dalam aplikasi.
   Contoh: "feat: menambahkan filter pencarian harga pada katalog"

2. fix: Memperbaiki bug atau kesalahan pada kode.
   Contoh: "fix: memperbaiki kesalahan perhitungan diskon keranjang"

3. docs: Perubahan yang hanya berkaitan dengan dokumentasi.
   Contoh: "docs: menambahkan petunjuk penggunaan API di README"

4. style: Perubahan format kode yang tidak mengubah logika (spasi, titik koma, dll).
   Contoh: "style: memformat ulang kerapian indentasi pada script.js"


9. ANALISIS PESAN COMMIT TERBAIK
--------------------------------------------------------------------------------
Pesan Commit Terbaik:
  `git commit -m "feat: menambahkan fitur pencarian produk di navbar"`

Alasan:
  - Mengikuti standar Conventional Commits dengan menyertakan tipe (`feat:`).
  - Menjelaskan secara rinci dan spesifik aksi yang dilakukan (menambahkan fitur 
    pencarian produk) beserta lokasinya (di navbar).
  - Dua pesan lainnya terlalu singkat dan samar ("update" tidak memberikan informasi 
    apa pun, "fix bug tombol" tidak menyebutkan tombol mana dan di halaman apa).


10. FUNGSI FILE .GITIGNORE & 4 JENIS FILE DI DALAMNYA
--------------------------------------------------------------------------------
Fungsi:
  Memberitahu Git untuk mengabaikan file atau folder tertentu agar tidak dilacak 
  atau diunggah ke repository.

4 Jenis File yang Sebaiknya Dimasukkan:
1. Dependency Packages (misal: `node_modules/`):
   Alasan: Ukurannya sangat besar dan dapat dipasang ulang secara otomatis oleh 
   anggota tim menggunakan file konfigurasi (seperti `package.json`).

2. File Lingkungan / Rahasia (misal: `.env`):
   Alasan: Berisi data sensitif seperti kata sandi database, API Key, dan token 
   rahasia yang berbahaya jika tersebar ke publik.

3. File Hasil Build / Kompilasi (misal: `dist/`, `build/`):
   Alasan: Merupakan file output otomatis dari proses kompilasi yang dapat 
   dihasilkan ulang kapan saja dari kode sumber.

4. File Sistem Operasi / Editor (misal: `.DS_Store`, `.vscode/`):
   Alasan: Merupakan konfigurasi personal pengguna/OS yang tidak relevan dengan 
   proyek dan dapat menyebabkan masalah pada lingkungan komputer pengembang lain.


11. STANDAR PENAMAAN BRANCH & CONTOHNYA
--------------------------------------------------------------------------------
Format Standar: <kategori>/<nama-singkat-fitur>

3 Contoh Penamaan Branch yang Baik:
1. `feature/user-login`
2. `bugfix/header-overflow`
3. `hotfix/payment-gateway-crash`

Alasan Menggunakan Format Ini:
  - Memberikan struktur kategorial yang rapi saat dilihat di Git client/GitHub.
  - Memudahkan pemahaman peran branch hanya dari namanya.
  - Mencegah bentrokan nama branch antar-pengembang.


12. PERAN TIGA TEKNOLOGI WEB UTAMA
--------------------------------------------------------------------------------
1. HTML (HyperText Markup Language):
   Bertindak sebagai struktur dasar atau kerangka dari sebuah halaman web (misal: 
   membuat teks, gambar, tombol, dan formulir).

2. CSS (Cascading Style Sheets):
   Bertindak sebagai penata tampilan dan estetika (desain, warna, tata letak, 
   jenis huruf, dan responsivitas layar).

3. JavaScript:
   Bertindak sebagai pemberi perilaku dan interaktivitas dinamis pada halaman 
   web (misal: animasi, validasi formulir, dan pengambilan data dari server).


13. DUA LINGKUNGAN EKSEKUSI JAVASCRIPT
--------------------------------------------------------------------------------
1. Peramban Web (Browser Environment):
   JavaScript berjalan di dalam browser (Chrome, Firefox, Safari) untuk mengatur 
   interaksi pengguna dengan antarmuka web (DOM Manipulation).

2. Lingkungan Server (Node.js Environment):
   JavaScript berjalan di luar browser (pada komputer/server) untuk mengelola 
   basis data, pembuatan API, dan logika *backend*.


14. PERBEDAAN JAVASCRIPT VS ECMAScript (ES) & BUKTI KODE
--------------------------------------------------------------------------------
Perbedaan:
  ECMAScript (ES) adalah standar spesifikasi bahasa pemrograman, sedangkan 
  JavaScript adalah bahasa pemrograman yang diimplementasikan berdasarkan 
  standar ECMAScript tersebut.

Perbandingan Kode (Gaya Lama ES5 vs Gaya Modern ES6+):

// -----------------------------------------------------------------------------
// Gaya Lama (ES5)
// -----------------------------------------------------------------------------
var nama = "Budi";
function sapa(namaUser) {
    return "Halo " + namaUser + "!";
}

// -----------------------------------------------------------------------------
// Gaya Modern (ES6+)
// -----------------------------------------------------------------------------
const nama = "Budi";
const sapa = (namaUser) => `Halo ${namaUser}!`;

```