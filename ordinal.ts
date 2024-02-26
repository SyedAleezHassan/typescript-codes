let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const num of numbers) {
    let ordinal: string;

    if (num === 1 || num === 2 || num === 3) {
        // Special cases for 1st, 2nd, and 3rd
        ordinal = num === 1 ? '1st' : (num === 2 ? '2nd' : '3rd');
    } else {
        // General case for 4th and onwards
        ordinal = num + 'th';
    }

    console.log(`${num} is ${ordinal} ordinal.`);
}
