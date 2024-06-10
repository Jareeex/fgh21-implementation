// Mendefinisikan fungsi untuk memeriksa palindrom
function cekPalindrom(kata) {
    let kata2 = ""; // Variabel untuk menyimpan kata yang dibalik

    // Melakukan iterasi mundur melalui setiap karakter kata
    for (let i = kata.length; i > 0; i--) {
        kata2 = kata2 + kata[i - 1]; // Membalikkan kata dengan cara menambahkan setiap karakter ke variabel kata2
    }

    // Memeriksa apakah kata yang dibalik sama dengan kata aslinya
    if (kata2 === kata) {
        console.log("Palindrom"); // Jika sama, kata adalah palindrom
    }
}

cekPalindrom("malam"); // Memanggil fungsi dengan kata yang ingin diperiksa
