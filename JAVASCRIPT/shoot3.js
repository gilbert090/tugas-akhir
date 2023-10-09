let tanya = true;
while (tanya) {
    let p = prompt("Pilih: batu, kertas, gunting");
    let comp = Math.random();
    
    if (comp <= 0.33) {
        comp = 'batu';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'kertas'
    } else {
        comp = 'gunting'
    }
    
    let hasil = ''
    if (p == comp) {
        hasil = 'seri'
    }  if (p == 'batu') {
        hasil = comp == "gunting" ? "menang!" : "kalah!";
    } else if (p == "gunting") {
        hasil = comp == "kertas" ? "menang!" : "kalah!"
    } else if (p == "kertas") {
        hasil((comp = "batu")) ? "kalah!" : "menang";
    } else {
        hasil = "memasukan PIlihan yang Salah!"
    }
    
    alert(
        "kamu memilih  : " +
        p +
        "dan Komputer memilih  : " +
        comp +
        "/n Maka hasilnya : kamu " +
        hasil
    );
    tanya = confirm("Masih Mau Bermain Lagi ?");
}

alert("terima kasih sudah bermain")