/*Write a function that takes a string as input and reverse only the vowels of a string.*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var arr=s.split('');
    var indexes=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]=='a'||arr[i]=='e'||arr[i]=='i'||arr[i]=='o'||arr[i]=='u'||arr[i]=='A'||arr[i]=='E'||arr[i]=='I'||arr[i]=='O'||arr[i]=='U'){
            indexes.push(arr[i]);
        }
    }
    indexes.reverse();
    for(var i=0;i<arr.length;i++){
        if(arr[i]=='a'||arr[i]=='e'||arr[i]=='i'||arr[i]=='o'||arr[i]=='u'||arr[i]=='A'||arr[i]=='E'||arr[i]=='I'||arr[i]=='O'||arr[i]=='U'){
            arr[i]=indexes[0];
            indexes.shift();
        }
    }
    return arr.join('');
};
