// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
export {};

const translations = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
};

/**
 * Converts numbers to words, could be improved.
 */
const numberToWords = (n: number): string => {
    let out = '';

    // Deal with thousands
    const thousands = Math.floor(n / 1000);

    if (thousands > 0) {
        for (let i = 0; i < thousands; i++) n -= 1000;
        out += `${translations[thousands]} thousand`;
    }

    // Deal with hundreds
    const hundreds = Math.floor(n / 100);

    if (hundreds > 0) {
        for (let i = 0; i < hundreds; i++) n -= 100;
        out += `${translations[hundreds]} hundred`;
    }

    // Deal with tens
    const tens = Math.floor(n / 10);

    if (tens > 0) {
        if (hundreds > 0) out += ' and ';
        for (let i = 0; i < tens; i++) n -= 10;

        if (n % 10 > 0 && tens == 1) {
            out += `${translations[10 + (n % 10)]}`;
            n -= n % 10;
        } else out += `${translations[tens * 10]} `;
    }

    // Deal with the remainder
    if (n > 0) {
        if (hundreds > 0 && tens <= 0) out += ' and ';
        out += translations[n];
    }

    return out;
};

// Output
let sum = 0;

for (let i = 1; i <= 1000; i++) {
    // Strip the words of all whitespace and add the length to the sum
    sum += numberToWords(i).replace(/\s+/g, '').length;
}

console.log(sum);
