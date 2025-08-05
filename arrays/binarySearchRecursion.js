const binarySearchRecursive = (array, target, left = 0, right = array.length - 1) => {
    if(left > right) return - 1
    let mid = Math.floor((left + right) / 2)
    if(array[mid] === target) return mid;
    else if (array[mid] < target) return binarySearchRecursive(array, target, left = mid + 1, right)
    else return binarySearchRecursive(array, target, left, right = mid - 1)
}

console.log(binarySearchRecursive([1, 3, 5, 7, 9], 7));