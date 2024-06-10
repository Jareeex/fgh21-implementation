// Definisikan fungsi 'harga' untuk menghitung total harga pesanan
function harga(price, promoCode, taxPercentage, includeDelivery, callback) {
    let discount = 0; // Inisialisasi variabel diskon dengan nilai awal 0
  
    // Tentukan diskon berdasarkan promoCode yang diberikan
    if (promoCode === "FAZZFOOD50") {
        // Jika promoCode FAZZFOOD50, berikan diskon maksimum 50.000 atau 50% dari harga, mana yang lebih kecil
        discount = Math.min(price * 0.5, 50000);
    } else if (promoCode === "DITRAKTIR60") {
        // Jika promoCode DITRAKTIR60, berikan diskon maksimum 30.000 atau 60% dari harga, mana yang lebih kecil
        discount = Math.min(price * 0.6, 30000);
    }
  
    // Hitung total sebelum pajak
    const totalBeforeTax = price; 
  
    // Hitung total tanpa diskon
    const totalWithoutTax = price - discount;
    
    // Hitung jumlah pajak
    const taxAmount = totalBeforeTax * (taxPercentage / 100);
    
    // Hitung biaya pengiriman
    const deliveryFee = includeDelivery ? 14000 : 0; // Jika includeDelivery adalah true, biaya pengiriman adalah 14.000, jika tidak, 0
  
    // Hitung total keseluruhan
    const total = totalWithoutTax + taxAmount + deliveryFee;
  
    // Siapkan objek hasil
    const result = {
      originalPrice: price, // Harga asli
      discount: discount, // Besaran diskon
      deliveryFee: deliveryFee, // Biaya pengiriman
      tax: taxAmount, // Jumlah pajak
      subtotal: total // Total keseluruhan
    };
  
    // Panggil callback dengan hasil perhitungan
    callback(result);
}

// Panggil fungsi 'harga' dengan parameter yang sesuai, dan lakukan penanganan hasilnya di dalam callback
harga(75000, 'FAZZFOOD50', 5, true, function(result) {
    console.log("Harga:", result.originalPrice);
    console.log("Biaya antar:", result.deliveryFee);
    console.log("Pajak:", result.tax);
    console.log("Subtotal:", result.subtotal);
    console.log("Potongan:", result.discount);
});
