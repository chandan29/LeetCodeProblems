/*Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.*/



/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var arr=s.split('');
    var cnt=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==arr[arr.length-1-i]){
            continue;
        }
        else{
            if(cnt==0){

                if(arr[i+1]==arr[arr.length-1-i] && arr[i+2]==arr[arr.length-2-i]){
                    arr.splice(i,1);
                    cnt++;
                    continue;
                }
                else if(arr[i]==arr[arr.length-2-i]){
                    arr.splice(arr.length-1-i,1);
                    cnt++;
                    continue;
                }


                else{
                    return false;
                }

            }
            else{
            return false;
            }
        }
    }
    return true;
};
