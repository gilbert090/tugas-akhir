var p = prompt("Pilih : batu,kertas,gunting");

var comp = Math.random();
if (comp < 0.33) {
    comp = "batu";
} else if (comp >= 0.34 && comp < 0.67) {
    comp = "kertas";
} else {
    comp = "gunting";
}





var hasil = "";

if (p == comp) {
    hasil = "seri";
}
else if (p == "batu") {
    if (comp == "gunting")
    {
        hasil = "menang";
    }
} else {
    hasil = "kalah";
}
 if (p == "kertas") {
    if (comp == "batu")
    {
        hasil = "menang";
    }
} else {
    hasil = "kalah";
}  if (p == "gunting") {
    if (comp == "kertas")
    {
        hasil = "menang";
    }
} else {
    hasil = "kalah";
}


alert(hasil);