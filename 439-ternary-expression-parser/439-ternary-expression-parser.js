/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function(e) {
    const stack = [];
  for(let i=e.length-1;i>=0;i--){
    if(e[i] === ':') continue // skip :
    if(e[i] !== '?'){
      stack.push(e[i])
      continue      
    }      
    i--//move ahead in the iteration
    const first = stack.pop()
    const second = stack.pop()
    if(e[i] === 'T'){
       stack.push(first) 
    }  
    else{
      stack.push(second)
    }
    
  }
  return stack.pop()
};