// Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


const maxProfit = (array) => {
    let minPrice = array[0];
    let maxProfit = 0;
    for(let price of array){
        if(price < minPrice){
            minPrice = price
        }else{
            maxProfit = Math.max(maxProfit,  price - minPrice)
        }
    }
    return maxProfit;
}

console.log(maxProfit([3, 2, 4, 9]))