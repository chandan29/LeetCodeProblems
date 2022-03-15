var Solution = function(w) {
    this.sum = [];
    w.forEach((el,i)=>{
        this.sum.push( (this.sum[i-1] || 0) + el);
    });
    this.total = this.sum[this.sum.length-1];
};

Solution.prototype.pickIndex = function() {
    var rand =  Math.floor( Math.random()*(this.total)+1); 
    var l = 0; 
    var r = this.sum.length-1;
    while(l<r)
    {
        var mid = Math.floor((l+r)/2);
        if(this.sum[mid] >= rand) 
        {
            r = mid;
        }
        else
        {
            l = mid+1;
        }
    }
    return l;
    
};