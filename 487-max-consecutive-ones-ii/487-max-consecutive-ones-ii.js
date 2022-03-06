/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxLen = 0;
    
    for(let i=0;i<nums.length;i++){
        let k = 1;
        let cnt = 0;
        for(let j=i;j<nums.length;j++){
            if(nums[j]===0){
                if(k){
                    k--;
                    cnt++;
                }
                else{
                    break;
                }
            }
            else{
                cnt++;
            }
            maxLen = Math.max(maxLen, cnt);
        }
    }
    
    return maxLen;
};