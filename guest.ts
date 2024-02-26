
var guest:String[]=["syed","aleez","hassan"];
var msgg:String="come for dinner";
for (let i = 0; i < guest.length; i++) {
    console.log( `hi ${guest[i]} ${msgg}` );
    
}
console.log("=============================")
console.log(`you have come to know that ${guest[2]} can not come for the dinner`);
guest[2]="lala";
for (let i = 0; i < guest.length; i++) {
    console.log( `hi ${guest[i]} ${msgg}` );
    
}
console.log("=============================")

guest.push("khuala","juala","fatima");
for (let i = 0; i < guest.length; i++) {
    console.log(`hi ${guest[i]} plz come for dinner now we have bigger table`);
    
}
console.log("=============================")
console.log("sorry guests table not arrived so youre not invited only 2 are..");
while(guest.length>=3){
    var namee=guest.pop();
console.log(`sorry ${namee} youre not invited now`);
    
}
console.log(guest);

// var newGuest:String[]=guest.slice(0,2);
//console.log(newGuest);
for (let i = 0; i < guest.length; i++) {
    console.log(`hi ${guest[i]} now youre invited`);
    
}
console.log(`the number of guests in the array are ${guest.length}`)

