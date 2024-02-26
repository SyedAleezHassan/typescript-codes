// Function to summarize sandwich order
function order_sandwich(...items: string[]): void {
    console.log('Sandwich Order:');
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log('---');
}

// Example calls
order_sandwich('Bread', 'Cheese', 'Tomato');
order_sandwich('Chicken', 'Lettuce', 'Mayo', 'Bread', 'Pickles');
order_sandwich('Ham', 'Swiss Cheese', 'Mustard', 'Rye Bread');
