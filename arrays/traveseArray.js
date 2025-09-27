const array = [2, 3, 0, 4];

const travelArray = (array) => {
    let visitedArray = new Set();
    let i=0;
    while(i < array.length){
        if(visitedArray.has(i)) break;
        visitedArray.add(i)
        i = array[i]
    }
    if(visitedArray.size === array.length) return "Perfect"
    else return "Not perfect"
}

console.log(travelArray(array))