//Write a function that takes a string as input and returns the string reversed.

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var str=s.split('').reverse().join('');
    return str;
};
