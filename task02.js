// Fungsi untuk membalikkan urutan kata dalam kalimat
const reverseWords = (kalimat) => {
    let arr = []; // Inisialisasi array kosong untuk menyimpan kata-kata dalam urutan terbalik
    let ba, bb = 0; // Inisialisasi variabel penanda awal dan akhir untuk setiap kata dalam kalimat

    // Looping untuk membagi kalimat menjadi kata-kata
    for (let i = 0; i < kalimat.length; i++) {
        // Jika ditemukan spasi atau sudah mencapai akhir kalimat
        if (kalimat[i] === " " || i === kalimat.length - 1) {
            if (i === kalimat.length - 1) {
                ba = i + 1; // Jika sudah mencapai akhir kalimat, penanda akhir adalah panjang kalimat
            } else {
                ba = i; // Jika masih spasi, penanda akhir adalah posisi spasi
            }
            let kata = "";
            // Membuat kata dari penanda awal hingga akhir
            for (let j = bb; j < ba; j++) {
                kata += kalimat[j];
            }
            // Menambahkan kata ke array, tetapi di depan array agar kata-kata tersusun terbalik
            arr = [kata, ...arr];
            bb = ba + 1; // Memperbarui penanda awal untuk kata berikutnya setelah spasi
        }
    }
    // Menggabungkan kata-kata yang telah dibalik menjadi sebuah kalimat
    let hasil = "";
    for (let i = 0; i < arr.length; i++) {
        // Menggunakan spasi untuk memisahkan setiap kata dalam kalimat
        if (i > 0) {
            hasil += " " + arr[i];
        } else {
            hasil += arr[i];
        }
    }
    // Menampilkan kalimat yang sudah kata-katanya dibalik urutannya
    console.log(hasil);
}

// Memanggil fungsi reverseWords dengan parameter kalimat
reverseWords("Saya Belajar JavaScript");
