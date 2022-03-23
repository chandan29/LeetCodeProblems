/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var map = {};
    
    for(var i=0;i<nums1.length;i++){
        if(map[nums1[i]]){
            map[nums1[i]]++;
        }
        else{
            map[nums1[i]] = 1;
        }
    }
    var result = [];
    
    for(var i=0;i<nums2.length;i++){
        if(map[nums2[i]]){
            result.push(nums2[i]);
            map[nums2[i]]--;
        }
    }
    
    return result;
};