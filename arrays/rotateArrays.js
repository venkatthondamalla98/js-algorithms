let array = [1, 2, 3, 4, 5, 6]

// let arr = [1, 2, 3, 4, 5];
// let k = 12;
// k = k % arr.length;  // 12 % 5 = 2
// This tells your function: "Just rotate 2 steps left, not 12, 
// because after 10 steps (2 full rotations), it looks the same.

// const rotateLeft = (array, k) => {
//      k = k % array.length;
//     // [3, 4, 5].concat([1, 2]) → [3, 4, 5, 1, 2]
//     return array.slice(k).concat(array.slice(0, k))
// }
// console.log(rotateLeft(array, 2))

// custom hooks: Custom hooks in react is a reusable javascript functions that us


const rotateArray = (array, k) => {
    k = k % array.length;
    console.log(k)
    return array.slice(k).concat(array.slice(0, k))
}

console.log(rotateArray(array, 9))