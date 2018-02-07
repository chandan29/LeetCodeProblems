
/*Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.*/



/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle==""){
        return 0;
    }
    var arr=haystack.split("");
  var arr2=needle.split("");
  for(var i=0;i<arr.length;i++){
    if(arr[i]==arr2[0]){
      for(var j=0;j<arr2.length;j++){
        if(arr[i+j]==arr2[j]){
          if(j==arr2.length-1){
            return i;
          }
        }
        else{
          break;
        }
      }
    }
  }
  return -1;
};
