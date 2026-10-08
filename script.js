const namaProduct = "Laptop XYZ";
const hargaProduct = 350000;
const TARIF_PPN = 0.11; // Tarif PPN 10%

//Data transaksi - bisa berubah, gunakkan let
let jumlahDibeli = 2;
let totalSebelumPPN = hargaProduct * jumlahDibeli;
let totalPPN = totalSebelumPPN * TARIF_PPN;
let totalBayar = totalSebelumPPN + totalPPN;
console.log("Product: ", namaProduct);
console.log("Harga: ", hargaProduct);
console.log("Jumlah Dibeli: ", jumlahDibeli);
console.log("Total Sebelum PPN: ", totalSebelumPPN);
console.log("Total PPN: ", totalPPN);
console.log("Total Bayar: ", totalBayar);