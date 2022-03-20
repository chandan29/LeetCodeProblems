/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var ind = nums1.length-1;
    m-=1;
    n-=1;
    while(m>=0 && n>=0){
        if(nums2[n]>=nums1[m]){
            nums1[ind] = nums2[n];
            n--;
        }
        else{
            nums1[ind] = nums1[m];
            m--;
        }
        ind--;
        console.log(nums1);
    }
    while(n>=0){
        nums1[ind] = nums2[n];
        n--;
        ind--;
    }
    
    return nums1
};