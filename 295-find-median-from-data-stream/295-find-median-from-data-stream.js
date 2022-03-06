
var MedianFinder = function() {
    this.ary = [];
};

MedianFinder.prototype.addNum = function(num) {
   
    var low = 0 ; 
    var high = this.ary.length-1;
    
    while(low <= high)
        {
            var mid = Math.floor((high + low)/2);
            
            if(this.ary[mid]  < num)
                {
                    low = mid+1;
                }
            else
                {
                    high =mid-1;
                }
        }
    this.ary.splice(low, 0, num);
    
};

MedianFinder.prototype.findMedian = function() {
    
    if(this.ary.length % 2 ==0)
        {
            var mid = this.ary.length/2;
            return (this.ary[mid] + this.ary[mid-1])/2;
        }
    else
        {
            var mid = Math.floor(this.ary.length/2);
            return (this.ary[mid]);
        }
    
};