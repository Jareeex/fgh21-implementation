function cekPalindrom (kata) {
let kata2 = ""
for(let i =kata.length; i>0;i--){
  kata2 = kata2 + kata[i-1]
}
if (kata2 === kata){
  console.log("Polindrom")
}
}
(cekPalindrom("malam"))
