/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n<2){
        return n;
    }
    
    var current = 0;
    var prev1 = 1;
    var prev2 = 0;
    
    for(var i=2;i<=n;i++){
        current = prev1+ prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return current;
};