
/* You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record. */
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var j=0;
    var k=0;
    var arr=s.split("");
    for(var i=0;i<arr.length;i++){
        console.log(arr[i]);
        if(arr[i]=="L"){
            j++;
        }
        else{
            if(j<3){
            j=0;
            }
        }

        if(arr[i]=="A"){
            k+=1;
        }

        if(j>2 || k>1){
            return false;
        }
    }
    return true;

};
