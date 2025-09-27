const array = [5, 5, 10, 100, 10, 5]

const sumOfElements = (array) => {
    let maxSum = 0
     let result = 0
    for(let i=0; i<array.length; i++){
        let j = 1
        while(j < array.length){
        result += array[i]
        j = j + 2
    }
    maxSum = Math.max(result, maxSum)
    }

    return maxSum
}

console.log(sumOfElements(array))