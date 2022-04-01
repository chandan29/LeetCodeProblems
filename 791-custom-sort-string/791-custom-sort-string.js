/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, str) {
  let count = new Array(26).fill(0);
  let res = [];
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i) - 97;
    count[charCode]++;
  }
  for (let i = 0; i < order.length; i++) {
    let charCode = order.charCodeAt(i) - 97;
    if (count[charCode] > 0) {
      for (let j = 0; j < count[charCode]; j++) res.push(order[i]);
      count[charCode] = 0;
    }
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0) {
      for (let j = 0; j < count[i]; j++) res.push(String.fromCharCode(i + 97));
    }
  }
  return res.join("");
  // T.C: O(N)
  // S.C: O(N)
};