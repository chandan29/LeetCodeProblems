/*Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.*/


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var str=s.replace(/[^\w]/gi,'').toLowerCase();
    if(str==str.split('').reverse().join('')){
        return true;
    }
    else{
        return false;
    }
};
