// console.log("*****");
// for (i = 0; i < 5; i++) { console.log("*"); }




// var line = "";
// for (i = 0; i < 5; i++) {
//     line = line + "*";
//     line += "\n";
// }
// console.log(line);


// var line = "";
// for (i = 0; i < 6; i++){
//     for (x = 0; x < 5; x++){
//         line += "a";
//     }
//     line += "\n";
// }
// console.log(line);



// var line = "";
// for (i = 0; i < 5;i=i-1) {
//   for (x = 0; x < i; x=x+1) {
//     line += "a";
//   }
//   line += "\n";
// }
// console.log(line);

// var line = "";
// for (i = 0; i <= 5; i++) {
//   for (x = 0; x <= i; x++) {

//     line += "*";
//   }
//   line += "\n";
// }
// console.log(line);





var line = "";

for (i = 100; i >= 0; i--) {
  for (s = 0; s <= i; s++){
    line+="*"
  }
  line += "\n";
}
console.log(line);
