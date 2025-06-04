// Find a "peak" — an element that is greater than or equal to its neighbors


const findPeakNumber = (array) => {
    let left = 0;
    let right = array.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right)/2)

        if((mid === 0 || array[mid] >= array[mid - 1]) && (mid === array.length-1 || array[mid] >= array[mid + 1])){
            return mid
        }

        if(array[mid - 1] > array[mid]){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }
    return -1
}

console.log(findPeakNumber([6, 8, 23, 7]))


//  first check if mid is greater than left and righ neighbours.
//  if left neighbour is greater than right, then right position is mid - 1
//  if right neighbour is greater than left, then left position is mid + 1