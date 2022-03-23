/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var op = [];
    getSets(0,[]);
    
    function getSets(index, chars){
        if(index == nums.length){
            op.push([...chars]);
            return;
        }
        
        getSets(index+1,chars);
        chars.push(nums[index]);
        getSets(index+1,chars);
        chars.pop();
    }
    
    return op;
};