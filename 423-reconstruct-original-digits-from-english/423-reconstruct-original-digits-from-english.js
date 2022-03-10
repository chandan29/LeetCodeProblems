/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    var map = Object.create(null);
    var nums = new Array(10).fill(0);
    
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    
    var detect = [ // index in nums, all letters, letter for count
        [0, "zero", "z"],
        [2, "two", "w"],
        [4, "four", "u"],
        [6, "six", "x"],
        [8, "eight", "g"],
        [5, "five", "f"],
        [7, "seven", "v"],
        [9, "nine", "i"],
        [3, "three", "h"],
        [1, "one", "n"]
    ];
    
    var count;
    for (var i = 0; i < detect.length; i++) {
        count = map[detect[i][2]];
        if (count > 0) {
            nums[detect[i][0]] = count;
            for (var j = 0; j < detect[i][1].length; j++) {
                map[detect[i][1][j]] -= count;
            }
        }
    }
    
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i.toString().repeat(nums[i]));
        }
    }
	
    return result.join("");
};