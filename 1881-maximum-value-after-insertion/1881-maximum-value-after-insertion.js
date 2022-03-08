/**
 * @param {string} n
 * @param {number} x
 * @return {string}
 */
var maxValue = function(n, x) {
    let arr = n.split("");
    let isInserted = false;
    if (n >= 0) {
        for (let i = 0; i < arr.length; i++) {
            if (x > arr[i]) {
                arr.splice(i, 0, x);
                isInserted = true;
                break;
            }

        }
    } else {
        for (let i = 1; i < arr.length; i++) {
            if (x < arr[i]) {
                arr.splice(i, 0, x);
                isInserted = true;
                break;
            }

        }

    }
    if (!isInserted) {
        arr.push(x)
    }
    return arr.join("")
};