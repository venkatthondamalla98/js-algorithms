const array = [3, 4, 8, 7, 6, 9]

const findSmallestConsecutive = (array) => {
    if(array.length === 0) return 0;
    const newArraySet = new Set(array);
    let minLength = Infinity;

    for(let num of newArraySet){
        if(!newArraySet.has(num - 1)){
            let currentNum = num;
            let currentSteak = 1;
            while(newArraySet.has(currentNum + 1)){
            currentNum += 1;
            currentSteak += 1;
        }
        if(currentSteak < minLength){
            minLength = currentSteak
        }
        }
    }
    return minLength === Infinity ? 0 : minLength
}

console.log(findSmallestConsecutive(array))