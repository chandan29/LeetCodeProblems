/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var res = dividend/divisor;
    if(res<0){
        res = Math.ceil(res);
    }
    else{
        res = Math.floor(res);
    }
    if(res>2147483647){
        res = 2147483647;
    }
    return res;
};