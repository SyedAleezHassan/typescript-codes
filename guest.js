var guest = ["syed", "aleez", "hassan"];
var msgg = "come for dinner";
for (var i = 0; i < guest.length; i++) {
    console.log("hi ".concat(guest[i], " ").concat(msgg));
}
console.log("=============================");
console.log("you have come to know that ".concat(guest[2], " can not come for the dinner"));
guest[2] = "lala";
for (var i = 0; i < guest.length; i++) {
    console.log("hi ".concat(guest[i], " ").concat(msgg));
}
console.log("=============================");
guest.push("khuala", "juala", "fatima");
for (var i = 0; i < guest.length; i++) {
    console.log("hi ".concat(guest[i], " plz come for dinner now we have bigger table"));
}
console.log("=============================");
console.log("sorry guests table not arrived so youre not invited only 2 are..");
while (guest.length >= 3) {
    var namee = guest.pop();
    console.log("sorry ".concat(namee, " youre not invited now"));
}
console.log(guest);
// var newGuest:String[]=guest.slice(0,2);
//console.log(newGuest);
for (var i = 0; i < guest.length; i++) {
    console.log("hi ".concat(guest[i], " now youre invited"));
}
console.log("the number of guests in the array are ".concat(guest.length));
