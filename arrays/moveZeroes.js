// Step-by-step with an example
// Input: nums = [0, 1, 0, 3, 12]

// Start: insertPos = 0

// Pass 1: write non-zeros in order

// i = 0, nums[0] = 0 → skip (do nothing)

// i = 1, nums[1] = 1 → write at insertPos=0 → nums[0] = 1, then insertPos = 1
// Array now: [1, 1, 0, 3, 12] (temporary overwrite is fine)

// i = 2, nums[2] = 0 → skip

// i = 3, nums[3] = 3 → write at insertPos=1 → nums[1] = 3, insertPos = 2
// Array: [1, 3, 0, 3, 12]

// i = 4, nums[4] = 12 → write at insertPos=2 → nums[2] = 12, insertPos = 3
// Array: [1, 3, 12, 3, 12]

// At this point, all non-zeros have been compacted to the front in original order: [1, 3, 12, _, _]. The trailing part is garbage values we’ll overwrite.

// Pass 2: fill rest with zeros

// While insertPos < nums.length:

// insertPos = 3 → nums[3] = 0

// insertPos = 4 → nums[4] = 0

// Final array: [1, 3, 12, 0, 0]


let moveZeroes = (nums) => {
    let nonZeroes = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[nonZeroes++] = nums[i]
        }
    }
    while(nonZeroes < nums.length){
        nums[nonZeroes++] = 0
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]))
