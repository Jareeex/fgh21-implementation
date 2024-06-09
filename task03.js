function harga(price, promoCode, taxPercentage, includeDelivery, callback) {
    let discount = 0;
  
    if (promoCode === "FAZZFOOD50") {
    
      discount = Math.min(price * 0.5, 50000);
    } else if (promoCode === "DITRAKTIR60") {
    
      discount = Math.min(price * 0.6, 30000);
    }
  
    const totalBeforeTax = price; 
    const totalWithoutTax = price - discount;
    const taxAmount = totalBeforeTax * (taxPercentage / 100);
    const deliveryFee = includeDelivery ? 14000 : 0;
    const total = totalWithoutTax + taxAmount + deliveryFee;
  
    const result = {
      originalPrice: price,
      discount: discount,
      deliveryFee: deliveryFee,
      tax: taxAmount,
      subtotal: total
    };
  
    callback(result);
  }
  

  harga(75000, 'FAZZFOOD50', 5, true, function(result) {
    console.log("Harga:", result.originalPrice);
    console.log("Biaya antar:", result.deliveryFee);
    console.log("Pajak:", result.tax);
    console.log("Subtotal:", result.subtotal);
    console.log("Potongan:", result.discount);
  });