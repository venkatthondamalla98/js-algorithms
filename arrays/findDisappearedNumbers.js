let finalArray = []
var findDisappearedNumbers = function(nums) {
    let sortedArray = nums.sort()
    let newArray = [...sortedArray]
    for(let i=0; i<sortedArray.length-1; i++){
        if(!newArray.includes(newArray[i] + 1)){
            finalArray.push(newArray[i] + 1)
            
            newArray.splice(i+1, 0, newArray[i] + 1)
        }
    }
    return finalArray
};

console.log(findDisappearedNumbers([1,1]))