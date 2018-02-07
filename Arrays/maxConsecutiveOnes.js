//Given a binary array, find the maximum number of consecutive 1s in this array.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var cnt=0,max=0;

    for(var i=0;i<nums.length;i++){
        if(nums[i]==1){
            ++cnt;
            if(i==(nums.length-1)){
                if(cnt>=max){
                    return cnt;
                }
                else{
                    return max;
                }
            }
        }
        else{
            if(cnt>max){
                max=cnt;
            }
            cnt=0;
        }
    }
    return max;
};
