let places:String[]=["Germany","Thiland","Saudia Arabia","Italy","Japan"];
let sortedArray=places.sort();
console.log(`The sorted array is :${sortedArray}`);
console.log("=========================================")
console.log(`The original array is ${places}`);
let revArray=places.sort((a, b) => b > a ? 1 : -1);
console.log(`The reversed array is ${revArray}`);
console.log(`The original array is ${places}`);
console.log(`The original array is ${places}`);
let reversee= places.reverse();
console.log(`The revser array is ${reversee}`);
console.log("=========================================")
console.log(`The original array is ${places}`);
places.sort();
console.log(places);


