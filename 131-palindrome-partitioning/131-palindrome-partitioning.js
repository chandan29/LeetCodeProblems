/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    dfs(s,0,[],result);
    
    return result;
};

var dfs = function(s,ind,current, result){
    if(ind >= s.length){
        result.push([...current]);
    }
    for(let end=ind;end<s.length;end++){
        if(isPalindrome(s,ind,end)){
            current.push(s.substring(ind,end+1));
            dfs(s,end+1,current, result);
            current.pop();
        }
    }
}

var isPalindrome = function(s, start, end){
    while(start<end){
        if(s[start]!==s[end]){
            return false;
        }
        start++;
        end--;
    }
    
    return true;
}