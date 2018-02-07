/*Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string.
If there are less than k characters left, reverse all of them.
If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.*/


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
	var last = s.length - 1;
    var str1 = '';
	for(var i = 0; i <= last; i += 2 * k) {
        var str = rStr(s.substr(i, k)) + s.substr(i + k, k);
        str1 += str;
	}
    return str1;
};

function rStr(s) {
    var a = '';
    for(var i = s.length - 1; i>= 0; i--) {
        a += s[i];
    }
    return a;
}
