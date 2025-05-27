// Given an array nums, return the maximum number in it.

const nums = [3, 4, 89, 7]

const largestNum = (nums) => {
    let max = nums[0]
    for(let i=1; i<nums.length; i++){
        if(nums[i] > max){
            max = nums[i]
        }
    }
    return max
}

const result = largestNum(nums)
console.log(result)