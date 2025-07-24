const factorialSeries = (n) => {
    if(n < 0) return "invalid input"
    if(n===0 || n===1) return 1
    return n * factorialSeries(n-1)
}

console.log(factorialSeries(5))