/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    var orderMap = {};
    for(var i=0;i<order.length;i++){
        orderMap[order[i]] = i;
    }
    
    for(var i=0;i<words.length-1;i++){
        for(var j=0;j<words[i].length;j++){
            if(j>= words[i+1].length){
                return false;
            }
            
            if(words[i][j] != words[i+1][j]){
                if(orderMap[words[i][j]] > orderMap[words[i+1][j]]){
                    return false;
                }
                else{
                    break;
                }
            }
        }
    }
    
    return true;
};