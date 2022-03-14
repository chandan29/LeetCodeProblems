var TimeMap = function() {
    this.dict = {};
};

TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.dict[key]){
        this.dict[key] = [];
    }
    this.dict[key].push([value,timestamp]);
};

TimeMap.prototype.search = function (left, right, arr, num){
    if (left === right){
        if(arr[left][1]<=num) return left;
        else return null;
    }
    let mid = Math.floor(left + (right-left)/2);
    if(left===right-1){
        if(num>=arr[left][1] && num<arr[right][1]) return left;
        else if (num>=arr[right][1]) return right;
        else return null;
    }
    if(arr[mid][1]>num){
        return this.search(left,mid,arr,num);
    }else{
        return this.search(mid,right,arr,num);
    }
}

TimeMap.prototype.get = function(key, timestamp) {
    if(!this.dict[key]){
        return '';
    }
    let index = this.search(0,this.dict[key].length-1,this.dict[key],timestamp);
    if(index===null) return '';
    return this.dict[key][index][0];
};