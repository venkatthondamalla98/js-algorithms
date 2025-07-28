// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


let lengthOfLastWord = function(s) {
    let modifyArray = s.split(" ").filter(word => word.length > 0);
    // console.log(modifyArray);
    return modifyArray[modifyArray.length - 1].length
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))