let reversiblePairs = [
    ['0', '0'], ['1', '1'], 
    ['6', '9'], ['8', '8'], ['9', '6']
];

let generateStroboNumbers = (n, finalLength) => {
    if (n == 0) {
        // 0-digit strobogrammatic number is an empty string.
        return [""];
    }

    if (n == 1) {
        // 1-digit strobogrammatic numbers.
        return ["0", "1", "8"];
    }

    let prevStroboNums = generateStroboNumbers(n - 2, finalLength);
    let currStroboNums = [];
    
    prevStroboNums.forEach((prevStroboNum) => {
        reversiblePairs.forEach((pair) => {
            if (pair[0] != '0' || n != finalLength) {
                currStroboNums.push(pair[0] + prevStroboNum + pair[1]);
            }
        });
    });

    return currStroboNums;
};


let findStrobogrammatic = function(n) {
    return generateStroboNumbers(n, n);
};