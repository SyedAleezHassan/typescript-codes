function tShirt(size, messg) {
    console.log("".concat(size));
    console.log("".concat(messg));
}
tShirt('large', 'hello world');
tShirt('medium', 'i love ts');
tShirt('small', 'i love myself');
console.log("=================================");
function cities(name, country) {
    if (name === void 0) { name = 'karachi'; }
    if (country === void 0) { country = 'Pakistan'; }
    //console.log(`${name} is the city of ${country}`)
    return "".concat(name, ",").concat(country);
}
// cities('washintgon','America')
// cities();
var res = cities('Lahore', 'Pakistan');
console.log(res);
