var personName = "SYED aleez hassan";
var lower = personName.toLowerCase();
var upper = personName.toUpperCase();
var titleCase = personName.replace(/\w\S*/g, function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
console.log("hi ".concat(titleCase, " learn this language"));
console.log("hi ".concat(upper, " please learn this beautiful language"));
console.log("hi ".concat(lower, ", would you like to leanr this"));
