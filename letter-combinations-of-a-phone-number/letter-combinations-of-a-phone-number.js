/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var options = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
    };
    var op = [];
    if(!digits.length){
        return op;
    }
    function backtrack(index, path){
        if(index===digits.length){
            op.push(path.join(''));
            return;
        }
        
        var possibleLetters = options[digits[index]];
        
        for(var i=0;i<possibleLetters.length;i++){
            path.push(possibleLetters[i]);
            
            backtrack(index+1, path);
            path.pop();
        }
    }
    
    backtrack(0,[]);
    
    
    return op;
};