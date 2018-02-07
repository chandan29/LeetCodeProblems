/*which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character.
The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.*/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var ud=0;
    var lr=0;
    for(var i=0;i<moves.length;i++){
        if(moves[i]=='U'){
            ud++;
        }
        else if(moves[i]=='D'){
            ud--;
        }
        else if(moves[i]=='L'){
            lr++;
        }
        else if(moves[i]=='R'){
            lr--;
        }
    }
    if(lr==0 && ud==0){
        return true;
    }
    return false;
};
