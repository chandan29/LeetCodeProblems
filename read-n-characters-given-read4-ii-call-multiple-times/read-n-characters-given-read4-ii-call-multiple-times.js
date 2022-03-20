/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    const buffer = Array(4);
    let num = 0;
    let j = 0;
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let i = 0;
        while(i < n) {
            if(num > 0) {
                buf[i++] = buffer[j++];
                num--;
            } else {
                j = 0;
                num = read4(buffer);
                if(num === 0) {
                    return i;
                }
            }
        }
        return i;
    };
};