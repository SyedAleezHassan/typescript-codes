var places = ["Germany", "Thiland", "Saudia Arabia", "Italy", "Japan"];
var sortedArray = places.sort();
console.log("The sorted array is :".concat(sortedArray));
console.log("=========================================");
console.log("The original array is ".concat(places));
var revArray = places.sort(function (a, b) { return b > a ? 1 : -1; });
console.log("The reversed array is ".concat(revArray));
console.log("=========================================");
console.log("The original array is ".concat(places));
var reversee = places.reverse();
console.log(reversee);
