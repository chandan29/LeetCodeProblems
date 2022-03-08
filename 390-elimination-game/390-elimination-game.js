/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n, A = [], ans = 1) {
    while (true) {
        if (n <= 1) break
        A.push(true); //               true always
        n = Math.trunc(n / 2); //      remove half / left

        if (n <= 1) break
        A.push(n % 2 === 1); //        true if odd
        n = Math.trunc(n / 2); //      remove half / right
    }

    let m = A.length;
    for (let i = m - 1; i >= 0; i--) { //               from reverse
        ans = ans * 2 + ((A[i] === false) ? -1 : 0); // double, reduce 1 if even
    }
    return ans;
};


/*var lastRemaining = function(n) {
    let arr=[];
    for(let i=1;i<=n;i++){
        arr.push(i);
    }
    let l2r = true;
    
    while(arr.length>1){
        let temp = [];
        if(l2r){
            for(let i=1;i<arr.length;i+=2){
                temp.push(arr[i]);
            }
            l2r = false;
        }
        else{
            for(let i=arr.length-2;i>=0;i-=2){
                temp.unshift(arr[i]);
            }
            l2r = true;
        }
        arr = temp;
    }
    
    return arr;
    
};*/