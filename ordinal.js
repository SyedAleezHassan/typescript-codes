var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    var ordinal = void 0;
    if (num === 1 || num === 2 || num === 3) {
        // Special cases for 1st, 2nd, and 3rd
        ordinal = num === 1 ? '1st' : (num === 2 ? '2nd' : '3rd');
    }
    else {
        // General case for 4th and onwards
        ordinal = num + 'th';
    }
    console.log("".concat(num, " is ").concat(ordinal, " ordinal."));
}
