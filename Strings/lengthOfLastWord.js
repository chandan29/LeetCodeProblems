/*Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only. */



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var str1 = s.replace(/\s+$/g, '');
    if(str1==''){
        return 0;
    }
    var str=str1.split(' ');
    str=str[str.length-1];
    return str.length;
};
