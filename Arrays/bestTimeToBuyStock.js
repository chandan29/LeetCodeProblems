/*Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock),
design an algorithm to find the maximum profit.*/



/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
     if(prices.length==0){
return 0;
}
let local = 0,global = 0;
for (let i=0;i<prices.length;i++){
if(prices[i+1]==undefined){
break;
}
local = Math.max(local+prices[i+1]-prices[i],0);
global = Math.max(local,global);
}
return global;
};
