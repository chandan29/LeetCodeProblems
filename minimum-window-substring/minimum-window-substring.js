/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let start = 0;

    let endLength = s.length + 1;
    let subStart = 0;

    let map = {};
    let match = 0;

    for (let d of t) {
        map[d] = (map[d] || 0) + 1
    }


    for (let i = 0; i < s.length; i++) {

        let char = s[i];

        if (char in map) {
            map[char]--;

            if (map[char] >= 0) {
                match++;
            }
        }

        while (match === t.length) {

            if (endLength > i - start + 1) {

                endLength = i - start + 1;
                subStart = start
            }

            let d = s[start];
            start++;

            if (d in map) {

                if (map[d] == 0) {
                    match--
                }
                map[d]++
            }

        }

    }

    if (endLength > s.length) {
        return ""
    }


    return s.substring(subStart, subStart + endLength);
};