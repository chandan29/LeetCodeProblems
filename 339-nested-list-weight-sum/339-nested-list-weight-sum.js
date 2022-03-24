var depthSum = function(nestedList) {
    var sum = 0;
    return helper(nestedList,1);
    
    
    function helper(list,d){
        for( let i=0; i<list.length; i++ ) {
        let val = list[i];
        
        if( val.isInteger() ) {
            val = val.getInteger()
            sum += val * d;
        } else {
            helper( val.getList(), d+1 );
        }
    }
    return sum ;
    }
    
    
    
    
};