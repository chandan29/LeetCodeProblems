/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        'I' : 1,
        'IV' : 4,
        'V' : 5,
        'IX' : 9,
        'X' : 10,
        'XL' : 40,
        'L' : 50,
        'XC' : 90,
        'C' : 100,
        'CD' : 400,
        'D' : 500,
        'CM' : 900,
        'M' : 1000
    }
    
    var sum = 0;
    var index = 0;
    
    while(index<s.length){
        if(index<s.length-1){
            var curr = s[index]+s[index+1];
            if(map[curr]){
                sum+=map[curr];
                index+=2;
                continue;
            }
        }
        sum+=map[s[index]];
        index++;
    }
    
    return sum;
};