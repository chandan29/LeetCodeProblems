/*We have two special characters. The first character can be represented by one bit 0.
The second character can be represented by two bits (10 or 11).
Now given a string represented by several bits.
Return whether the last character must be a one-bit character or not. The given string will always end with a zero.*/

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    for(var i=0;i<bits.length;i++){
        if(i==(bits.length-1)){
            return true;
        }
        if(bits[i]==0){
            continue;
        }
        else if(bits[i]==1){
            i++;
            continue;
        }
    }
    return false;

};
