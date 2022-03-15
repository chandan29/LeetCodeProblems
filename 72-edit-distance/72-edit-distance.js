/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(str1, str2) {
   const t = new Array(str1.length+1);
   for(i=0;i<t.length;i++) {
       t[i] = new Array(str2.length+1);
   } 
   for(i=0;i<t.length;i++) {
       t[i][0] = i;
   }
   for(i=0;i<t[0].length;i++) {
       t[0][i] = i;
   }
   for(i=1;i<t.length;i++) {
       for(j=1;j<t[i].length;j++) {
           if (str1[i-1] == str2[j-1]) {
               t[i][j] = t[i-1][j-1];
           } else {
               t[i][j] = 1+Math.min(t[i-1][j],t[i][j-1],t[i-1][j-1]);
           } 
       }
   }
   return t[str1.length][str2.length];
};