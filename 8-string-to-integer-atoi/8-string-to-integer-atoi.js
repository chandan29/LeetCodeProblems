/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    var sign = 1;
    var index= 0;
    if(s[0]==='-'){
        sign = -1;
        index++;
    }
    else if(s[0] === '+'){
        index++;
    }
    var temp = '';
    for(var i=index;i<s.length;i++){
        if(!isDigit(s[i])){
            break;
        }
        else{
            temp+=s[i];
        }
    }
    var num = 0;
    index = 0;
    for(var i=temp.length - 1; i>=0; i--){
        num+= temp[i] * Math.pow(10,index++);
    }
    num*=sign;
    if(num > 2147483647){
        return 2147483647;
    }
    else if(num< -2147483648){
        return -2147483648;
    }
    
    return num;
    
};


var isDigit = function(char){
    if(char>='0' && char<='9'){
        return true;
    }
    return false;
}