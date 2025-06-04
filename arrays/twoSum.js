// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target

const twoSumIndices = (array, target) => {
    const arrayMap = new Map()
    for(let i=0; i<=array.length; i++){
        let complement = target - array[i]

        if(arrayMap.has(complement)){
            // if we want indices of two elements
            return [arrayMap.get(complement), i] 
            // if we want values then
            // return [complement, array[i]]
        }
        arrayMap.set(array[i], i)
    }
    return []
}

console.log(twoSumIndices([2, 4, 5, 9], 6))