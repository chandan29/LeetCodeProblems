//Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.



/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    str="";
    var arr=s.split(' ');
    for(var i=0;i<arr.length;i++){
        str+=arr[i].split('').reverse().join('')+' ';
    }
    str = str.substring(0, str.length - 1);
    return str;
};
