/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let freq={};
    let cache={};
    for(let i=0;i<nums.length;i++){
        if(freq[nums[i]]){
            freq[nums[i]]++;
        }
        else
            freq[nums[i]]=1;
    }
    
    let uniqueElements=[...new Set(nums)].sort((a,b)=>a-b);
 
    function calc(index,arr){
        if(index<0)
            return 0;
        if(cache[index])
            return cache[index];
        let a1=calc(index-1,arr);
        let a2=freq[arr[index]]*arr[index];
        if(index-1>=0 && arr[index-1]===arr[index]-1){
            a2+=calc(index-2,arr);
        }
        else{
            a2+=calc(index-1,arr);
        }
        return cache[index]=Math.max(a1,a2);
    }

    return calc(uniqueElements.length-1,uniqueElements);
};