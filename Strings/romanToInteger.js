/*Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.*/




/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
var baseTranslator = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    },
prev = 0,
result = 0;
    for (var i = s.length - 1; i >= 0; i--) {
      var num = baseTranslator[s[i]];
    if (num >= prev) {
        result += num;
    } else {
        result -= num;
    }
    prev = num;
    }
return result;

};
