/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    var st = [];
    
    for(var i=0;i<num.length;i++){
        while(k && st.length && st[st.length-1] > num[i]){
            st.pop();
            k--;
        }
        
        st.push(num[i]);
    }
    while(k){
        st.pop();
        k--;
    }
    var flag = false;
    var str = '';
    for(var i=0;i<st.length;i++){
        if(!flag && st[i]==0){
            continue;
        }
        else if(st[i]==0){
            str+=st[i];
        }
        else if(st[i]!==0){
            str+=st[i];
            flag = true;
        }
    }
    if(str===''){
        str = '0';
    }
    return str;
};