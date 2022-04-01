/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {

    const map = {}

    return ways(s, 0)

    function ways(s, l) {
        
        if (map[l]) return map[l]
        
        //  starts with 0 is not allowed
        if (s[l] === '0') return 0
        
        // boundary      single digit or empty
        if (l >= s.length-1) return 1


        // s[i] is valid
        let way = ways(s, l + 1)

		// s[i]s[i+1] is valid 
        const twoDigit = (s[l] - '0') * 10 + (s[l + 1] - '0')
        if (twoDigit <= 26)
            way += ways(s, l + 2)

        // store
        map[l] = way
		
        return way
    }

}