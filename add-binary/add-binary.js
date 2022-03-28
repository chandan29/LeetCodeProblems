/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
     a = a.split('').map(Number);
    b = b.split('').map(Number);
    let add = 0, res = [];
    while(a.length || b.length){
        let tmp1 = a.length > 0? a.pop(): 0,
            tmp2 = b.length > 0? b.pop(): 0;
        let sum = tmp1 + tmp2 + add;

        if(sum > 1){
            if(sum===2){
                sum = 0;
            }
            else{
                sum = 1;
            }
            add = 1;
        }else{
            add = 0;
        }
        res.unshift(sum);
    }
    add && res.unshift(1);
    return res.join("");
};