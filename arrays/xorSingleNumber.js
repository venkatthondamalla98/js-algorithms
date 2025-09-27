const xorSingleNumber = (array) => {
    let result = 0
    for(let num of array){
        result ^= num
    }
    return result
}

console.log(xorSingleNumber([2, 1, 3, 3, 2]))