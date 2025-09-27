let result = []
const productExceptSelf = (array) => {
    for(let i=0; i<array.length; i++){
    const filteredArray = array.filter(item => item !== array[i])
    const product = filteredArray.reduce((sum, acc) => {
        return sum * acc
    })
    result.push(product)
    }
    return result
}

console.log(productExceptSelf([-1,1,0,-3,3]))