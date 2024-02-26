// Function to summarize sandwich order
function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Sandwich Order:');
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log('---');
}
// Example calls
order_sandwich('Bread', 'Cheese', 'Tomato');
order_sandwich('Chicken', 'Lettuce', 'Mayo', 'Bread', 'Pickles');
order_sandwich('Ham', 'Swiss Cheese', 'Mustard', 'Rye Bread');
