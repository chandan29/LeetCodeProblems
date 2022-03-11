/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let min = 6;
    let hour1 = 30;
    
    let mins = min * minutes;
    let hours = (hour % 12 + minutes/60) * hour1;
    
    let diff = Math.abs(hours - mins);
    
    return Math.min(diff, 360-diff);
    
    
};