/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (S) {
    if (!S.length) return 0 // empty string
    const stack = []

    S.split('').forEach(character => {
        if (character === '(') {
            stack.push('(')
        } else if (character === ')' && stack[stack.length - 1] === '(') {
            stack.pop()
        } else {
            stack.push(')')
        }
    })

    return stack.length
};