// longest consecutive sequence from an array

const array = [2, 6, 3, 4, 7, 9]

const findLongestCons = (array) => {
    if(array.length === 0) return 0
    const newArraySet = new Set(array)
    let maxLength = 0;
    for(let num of array){
        if(!newArraySet.has(num -1)){
            let currentNum = num;
            let currentStreak = 1;
            while(newArraySet.has(currentNum + 1)){
            currentNum += 1;
            currentStreak += 1;
        }
        maxLength = Math.max(maxLength, currentStreak)
        }
    }
    return maxLength
}

console.log(findLongestCons(array))