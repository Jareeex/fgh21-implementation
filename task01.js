function cekPalindrom(kata) {
  let pisahKata = kata.split("");
  let gantiKata = pisahKata.reverse();
  let hasil = gantiKata.join("");

  if (hasil === kata) {
    return "Palindrom";
  } else {
    return "Bukan Palindrom";
  }
}

console.log(cekPalindrom("malam"));