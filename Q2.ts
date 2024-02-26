var personName:String="SYED aleez hassan";
var lower=personName.toLowerCase();
var upper=personName.toUpperCase();
var titleCase: string = personName.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
console.log(`hi ${titleCase} learn this language`);
console.log(`hi ${upper} please learn this beautiful language`);
console.log(`hi ${lower}, would you like to leanr this`);