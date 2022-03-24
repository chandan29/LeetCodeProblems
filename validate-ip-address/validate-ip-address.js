/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
    var ipv4Arr = queryIP.split('.');
    var ipv6Arr = queryIP.split(':');
    var flag = true;
    if(ipv4Arr.length === 4){
        for(var i=0;i<ipv4Arr.length;i++){
            var num = parseInt(ipv4Arr[i]);
            if(num.toString().length!== ipv4Arr[i].length){
                flag = false;
                break;
            }
            if(num<0 || num > 255){
                flag = false;
                break;
            }
        }
        if(flag){
            return "IPv4";
        }
    }
    
    var map = {};
    
    for(var i=65;i<=70;i++){
        map[String.fromCharCode(i)] = 1;
    }
    
    for(var i=97;i<=102;i++){
        map[String.fromCharCode(i)] = 1;
    }
    
    for(var i=48;i<=57;i++){
        map[String.fromCharCode(i)] = 1;
    }
    
    
    if(ipv6Arr.length === 8){
        for(var i=0;i<ipv6Arr.length;i++){
            var curr = ipv6Arr[i];
            if(!curr){
                flag = false;
                break;
            }
            if(curr.length< 1 || curr.length > 4){
                flag = false;
                break;
            }
            for(var j=0;j<curr.length;j++){
                if(!map[curr[j]]){
                    flag = false;
                    break;
                }
            }
            
        }
        if(flag){
            return "IPv6"
        }
    }
    
    
    return "Neither";
    
};