const numToWordsDictionary = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Eleven",
    12: "Twelve",
    13: "Thirteen",
    14: "Fourteen",
    15: "Fifteen",
    16: "Sixteen",
    17: "Seventeen",
    18: "Eighteen",
    19: "Nineteen",
    20: "Twenty",
    30: "Thirty",
    40: "Forty",
    50: "Fifty",
    60: "Sixty",
    70: "Seventy",
    80: "Eighty",
    90: "Ninety",
    100: "Hundred",
    1000: "Thousand",
    1000000: "Million",
    1000000000: "Billion"
}
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(n) {
    
    let num = n;
    let stringNumber = "";
    let multiplicationFactor = 0;
    let remainder = 0;
    
    if(num === 0) {
        return "Zero";
    }
    
    while(num > 0) {
        // Billions
        if(num >= 1000000000) {
            multiplicationFactor = num - num % 1000000000;
            remainder = Math.floor(num / 1000000000);
            stringNumber = `${stringNumber} ${numToWordsDictionary[remainder]} ${numToWordsDictionary[1000000000]}`;
            num = num % 1000000000;
            continue;
        }

        // Millions
        if(num >= 1000000 && num < 1000000000) {
            remainder =  Math.floor(num / 1000000);
            const thousands = numberToWords(remainder);
            stringNumber = `${stringNumber} ${thousands} ${numToWordsDictionary[1000000]}`;
            num = num % 1000000;
            continue;
        }

        // Thousands
        if(num >= 1000 && num < 1000000) {
            remainder =  Math.floor(num / 1000);
            const hundreds = numberToWords(remainder);
            stringNumber = `${stringNumber} ${hundreds} ${numToWordsDictionary[1000]}`;
            num = num % 1000;
            continue;
        }

        // Hundreds
        if(num >= 100 && num < 1000) {
            remainder =  Math.floor(num / 100);
            stringNumber = `${stringNumber} ${numToWordsDictionary[remainder]} ${numToWordsDictionary[100]}`;
            num = num % 100;
            continue;
        }

        if(num >= 20 && num < 100) {
            remainder = Math.floor(num/10);
            remainder*=10;
            console.log(remainder);
            stringNumber = `${stringNumber} ${numToWordsDictionary[remainder]}`;
            num = num % 10;
            continue;
        }

        if(num < 20) {
            remainder = num;
            stringNumber = `${stringNumber} ${numToWordsDictionary[remainder]}`;
            num = num % 1;
            continue;
        }
    }
    
    return stringNumber.trim();
    
};