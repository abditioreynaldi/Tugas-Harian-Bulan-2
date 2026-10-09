let umur = 20;
let punyaKTP = true;
let sudahMenikah = false;

// Boleh mendaftar jika: umur minimal 17 DAN punya KTP
let bolehdaftar = umur >= 17 && punyaKTP;
console.log("Boleh mendaftar:", bolehdaftar); // Output: true

// Mendapat diskon jika: sudah menikah ATAU berusia di atas 60
let dapatDiskon = sudahMenikah || umur > 60;
console.log("Dapat diskon   :", dapatDiskon); // Output: false

// Status belum menikah
let belumMenikah = !sudahMenikah;
console.log("Belum menikah  :", belumMenikah); // Output: true