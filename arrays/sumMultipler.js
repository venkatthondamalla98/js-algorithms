// Input: [2, 5, 6, -6, 16, 2, 3, 6, 5, 3]
// Sum = 42 → 2 * sum = 84
// Check if any two elements multiply to more than 84
// → 16 * 6 = 96 → ✅
// Return: "true"

const sumMultipler = (array) => {
    let sum = array.reduce((acc, ele) => acc + ele, 0)
    let doubleTheSum = sum * 2
    for(let i=0; i<array.length; i++){
        for(let k=i+1; k<array.length; k++){
            if(array[i] * array[k] > doubleTheSum) return true
        }
    }
    return false
}

console.log(sumMultipler([2, 5, 6, -6, 16, 2, 3, 6, 5, 3]))