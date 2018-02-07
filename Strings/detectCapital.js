/*Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital if it has more than one letter, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.*/


/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if(word==word.toUpperCase()){
        return true;
    }
    else if(word==word.toLowerCase()){
        return true;
    }
    else if((word[0]==word[0].toUpperCase())){
        word = word.slice( 1 );
        if(word==word.toLowerCase()){
        return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }

};
