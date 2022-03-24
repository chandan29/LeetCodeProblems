/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if(!nums1 || !nums2 || !nums1.length || !nums2.length){
        return [];
    }
    var map1 = {};
    var op = [];
    
    for(var i=0;i<nums1.length;i++){
        if(!map1[nums1[i]]){
            map1[nums1[i]] = 1;
        }
        else{
            map1[nums1[i]] += 1;
        }
    }
    
    for(var i=0;i<nums2.length;i++){
        if(map1[nums2[i]]){
            op.push(nums2[i]);
            delete map1[nums2[i]];
        }
    }
    
    return op;
};