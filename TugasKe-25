1. Dua Arah Aliran Kode antara Komputer Lokal dan GitHub 

Dalam Git terdapat dua arah aliran kode: 

Push (Lokal → GitHub) 

Push digunakan untuk mengirim perubahan dari repository lokal ke repository di GitHub. 

Contoh situasi nyata: Setelah menyelesaikan fitur login pada proyek website di laptop, programmer melakukan git push agar perubahan tersebut tersimpan di GitHub dan dapat diakses anggota tim lainnya. 

Pull (GitHub → Lokal) 

Pull digunakan untuk mengambil perubahan terbaru dari GitHub ke komputer lokal. 

Contoh situasi nyata: Sebelum mulai bekerja pada pagi hari, seorang programmer melakukan git pull untuk mendapatkan perubahan terbaru yang telah diunggah anggota tim lain ke GitHub. 

 

2. Fungsi Perintah git push 

Perintah: 

1     git push 

digunakan untuk mengirim commit dari repository lokal ke repository remote (GitHub). 

a. Fungsi opsi -u pada git push -u origin main 

Perintah: 

1     git push -u origin main 

berfungsi mengirim branch main ke remote origin sekaligus menetapkan hubungan (tracking) antara branch lokal dan branch remote. 

b. Apa yang terjadi jika opsi -u tidak disertakan? 

Push tetap berhasil, tetapi Git belum mengetahui branch remote yang menjadi pasangan branch lokal. 

Akibatnya pada push berikutnya kita harus menulis: 

1     git push origin main 

setiap kali melakukan push. 

c. Mengapa setelah -u ditetapkan cukup menjalankan git push? 

Karena Git sudah menyimpan informasi bahwa branch lokal main terhubung dengan branch remote origin/main. 

Sehingga Git otomatis mengetahui tujuan push: 

1     git push 

dan 

1     git push origin main 

akan memberikan hasil yang sama. 

 

3. Perbedaan Git Clone dan Git Init 

Git Init 

1     git init 

Digunakan untuk membuat repository Git baru pada folder yang sudah ada. 

Contoh: 

1     mkdir proyek 

2     cd proyek 

3     git init 

Repository tersebut awalnya hanya ada di komputer lokal. 

Git Clone 

1     git clone https://github.com/user/proyek.git 

Digunakan untuk menyalin repository yang sudah ada dari GitHub ke komputer lokal. 

Perbedaan Utama 

Git Init 

Git Clone 

Membuat repository baru 

Menyalin repository yang sudah ada 

Belum terhubung ke GitHub 

Otomatis terhubung ke repository asal 

Tidak memiliki riwayat commit 

Membawa seluruh riwayat commit 

Mengapa setelah git clone tidak perlu git init? 

Karena proses clone sudah membuat folder repository Git lengkap beserta konfigurasi remotenya. Repository Git sudah terbentuk secara otomatis. 

 

4. Fungsi Perintah Git Pull 

Perintah: 

1     git pull 

digunakan untuk mengambil dan menggabungkan perubahan terbaru dari repository remote ke repository lokal. 

Mengapa penting dalam kerja tim? 

Karena banyak anggota tim bekerja pada repository yang sama. Jika tidak melakukan pull, seseorang dapat bekerja menggunakan versi proyek yang sudah ketinggalan. 

Dua momen penting melakukan git pull 

1. Sebelum mulai bekerja 

1     git pull 

agar mendapatkan versi terbaru proyek. 

2. Sebelum melakukan push 

1     git pull 

untuk memastikan repository lokal sudah sinkron dengan repository remote sehingga mengurangi risiko konflik. 

 

5. Alur Kerja Harian yang Direkomendasikan 

1     git pull 

Mengambil perubahan terbaru dari GitHub. 

1     git status 

Memeriksa kondisi repository. 

1     git add . 

Menambahkan perubahan ke staging area. 

1     git commit -m "Menambahkan fitur baru" 

Menyimpan perubahan ke riwayat Git. 

1     git push 

Mengirim perubahan ke GitHub. 

Mengapa urutan ini penting? 

git pull → memastikan kode terbaru. 

git status → mengetahui perubahan yang terjadi. 

git add → memilih file yang akan disimpan. 

git commit → membuat catatan perubahan. 

git push → membagikan perubahan ke GitHub. 

 

6. Apa itu Fork? 

Fork adalah proses membuat salinan repository milik orang lain ke akun GitHub kita sendiri. 

Situasi nyata yang memerlukan Fork 

1. Kontribusi Open Source 

Seseorang ingin memperbaiki bug pada proyek milik orang lain tetapi tidak memiliki akses langsung. 

2. Membuat Versi Modifikasi 

Seseorang ingin mengembangkan fitur baru dari sebuah proyek open source tanpa mengubah repository asli. 

Perbedaan Fork dan Clone 

Fork 

Clone 

Terjadi di GitHub 

Terjadi di komputer lokal 

Membuat salinan ke akun GitHub sendiri 

Mengunduh repository ke komputer 

Digunakan untuk kontribusi 

Digunakan untuk bekerja secara lokal 

 

7. Enam Langkah Kontribusi Open Source dengan Fork + Pull Request 

1. Fork Repository 

Tujuan: 

Membuat salinan repository ke akun GitHub sendiri. 

2. Clone Repository Hasil Fork 

1     git clone URL_FORK 

Tujuan: 

Mengunduh repository ke komputer lokal. 

3. Membuat Branch Baru 

1     git switch -c fitur-baru 

Tujuan: 

Memisahkan pekerjaan dari branch utama. 

4. Melakukan Perubahan dan Commit 

1     git add . 

2     git commit -m "Menambahkan fitur" 

Tujuan: 

Menyimpan perubahan secara terstruktur. 

5. Push ke Repository Fork 

1     git push origin fitur-baru 

Tujuan: 

Mengirim perubahan ke GitHub. 

6. Membuat Pull Request 

Tujuan: 

Mengajukan perubahan kepada pemilik repository agar ditinjau dan digabungkan. 

 

8. Apa itu Pull Request? 

Pull Request (PR) adalah permintaan resmi untuk menggabungkan perubahan dari suatu branch atau fork ke repository utama. 

Mengapa tidak langsung merge ke main? 

Karena perubahan perlu ditinjau terlebih dahulu untuk memastikan kualitas kode dan menghindari kesalahan. 

Dua keuntungan menggunakan PR 

1. Code Review 

Anggota tim dapat memeriksa kualitas kode sebelum digabungkan. 

2. Mengurangi Bug 

Kesalahan dapat ditemukan lebih awal sebelum masuk ke branch utama. 

 

9. Studi Kasus Andi dan Budi 

a. Apa yang kemungkinan terjadi saat Budi melakukan push? 

Kemungkinan Git menolak push (push rejected). 

Contoh pesan: 

1     ! [rejected] main -> main (non-fast-forward) 

b. Mengapa hal ini terjadi? 

Karena repository GitHub sudah memiliki commit baru dari Andi yang belum dimiliki Budi. 

Repository lokal Budi tidak sinkron dengan repository remote karena belum melakukan git pull. 

c. Apa yang seharusnya dilakukan Budi sebelum mulai mengedit? 

Menjalankan: 

1     git pull 

untuk mengambil perubahan terbaru dari GitHub. 

d. Urutan perintah yang seharusnya dilakukan Budi 

1     git pull 

1     # edit file 

1     git add style.css 

1     git commit -m "Memperbarui style halaman" 

1     git push 

 

10. Studi Kasus Alur Kerja Lengkap 

a. Apa yang dilakukan git clone? 

1     git clone https://github.com/andi/proyek.git 

Perintah tersebut mengunduh seluruh repository dari GitHub ke komputer lokal beserta seluruh riwayat commit dan konfigurasi remote. 

 

b. Mengapa membuat branch perbaikan-bug? 

1     git switch -c perbaikan-bug 

Agar perubahan dikerjakan secara terpisah dari branch utama (main). 

Keuntungannya: 

lebih aman; 

tidak mengganggu kode stabil; 

memudahkan review. 

 

c. Tujuan git push origin perbaikan-bug 

1     git push origin perbaikan-bug 

Untuk mengirim branch baru bernama perbaikan-bug ke GitHub. 

Tidak menggunakan git push saja karena branch remote tersebut mungkin belum ada sehingga Git perlu diberi tahu tujuan push pertama kali. 

 

d. Setelah perintah terakhir dijalankan, apa yang dilakukan di GitHub? 

Membuka repository di GitHub. 

Klik tombol Compare & Pull Request. 

Menuliskan judul dan deskripsi perubahan. 

Klik Create Pull Request. 

Dengan demikian pemilik repository dapat meninjau perubahan yang diajukan. 

 

e. Jika pemilik repo meminta revisi, apa yang harus dilakukan? 

Langkahnya: 

1     git switch perbaikan-bug 

Melakukan perbaikan pada file. 

1     git add . 

1     git commit -m "Memperbaiki revisi sesuai masukan reviewer" 

1     git push origin perbaikan-bug 

Setelah push dilakukan, Pull Request yang sama akan otomatis diperbarui di GitHub. Reviewer kemudian dapat memeriksa revisi tersebut dan memutuskan apakah akan melakukan merge ke branch utama. 