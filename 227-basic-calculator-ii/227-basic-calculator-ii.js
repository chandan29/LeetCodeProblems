/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack=[]
    let operation='+'
    let currNum=0
    for(let i=0;i<s.length;i++){
        let str=s[i]
        if(str>='0'&&str<='9'){
            currNum=(currNum*10)+ (+str)
        }
        if(['+','-','*','/'].includes(str)||i===s.length-1){
            if(operation==='+'){
                stack.push(currNum)
            }else if(operation==='-'){
                stack.push(-currNum)
            }else if(operation==='*'){
                stack.push(stack.pop()*currNum)
            }else if(operation==='/'){
                if(stack[stack.length-1]<0){
                    stack.push(Math.ceil(stack.pop()/currNum))
                }else{
                    stack.push(Math.floor(stack.pop()/currNum))
                }
            }
            currNum=0;
            operation=str
        }
    }
    let res=0;
    while(stack.length){
        res+=stack.pop()
    }
    return res;
};