/*
Link:
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
Example 1:
  Input: prices = [7,1,5,3,6,4]
  Output: 5
  Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
  Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:
  Input: prices = [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transactions are done and the max profit = 0.
Constraints:
  1 <= prices.length <= 105
  0 <= prices[i] <= 104
*/

/*
Pseudocode:
Create a var to hold the maxProfit possible (init at 0)
Create a car to hold minimum price init at the first value in the arr
  loop through the elements
    if: the current element is less than the minimum price set minimum price to current element
    else if the current element - the minimum price is greater than the max profit set maxProfit to currElement - minimumPrice
  return the maxProfit
*/

const maxProfit = prices => {
  let maxProfit = 0;
  let minimumPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minimumPrice) {
      minimumPrice = prices[i];
    } else if (prices[i] - minimumPrice > maxProfit) {
      maxProfit = prices[i] - minimumPrice;
    }
  }
  return maxProfit;
};

console.log(maxProfit([3, 2, 6, 5, 0, 3]));

module.exports = maxProfit;
