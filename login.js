var userName = ['syed', 'aleez', 'hassan', 'umer'];
console.log("syed is admin if this website");
for (var i in userName) {
    if (userName[i] === 'syed') {
        console.log("hi syed do you want to see the status report");
    }
    else {
        console.log("hi ".concat(userName[i], " thank you for logging in"));
    }
}
console.log("==================================");
var currentUser = ['wahaj', 'ebad', 'aman', 'salman', 'shakoor'];
var newUser = ['Ebad', 'aman', 'kapil', 'farman', 'nawaz'];
for (var i in currentUser) {
    var isAvailable = true;
    for (var j in newUser) {
        if (currentUser[i].toLocaleLowerCase() === newUser[j].toLocaleLowerCase()) {
            console.log("".concat(newUser[j], " usernae not available"));
            isAvailable = false;
            break;
        }
    }
    if (isAvailable) {
        console.log("".concat(currentUser[i], " available"));
    }
}
