//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var arr=s.split('');
    var cnt=100000;
    arr.sort();
    //return arr;
    for(var i=0;i<arr.length;i++){
        if(arr[i]!=arr[i+1] && arr[i+1]==arr[i+2]){
            if(cnt>s.indexOf(arr[i])){
             cnt=s.indexOf(arr[i]);
            }
        }
    }
    return cnt;
};
