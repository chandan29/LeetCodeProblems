/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people = people.sort((a,b)=>{
        return a-b;
    });
    
    let boats = 0;
    
    let left = 0;
    let right = people.length-1;
    
    while(left<=right){
        boats++;
        if(people[left]+people[right]<=limit){
            left++;
        }
        right--;
    }
    
    return boats;
    
};