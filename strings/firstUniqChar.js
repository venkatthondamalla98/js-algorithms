const str = "leetcode"

const findFirstUniqueChar = (str) => {
    let modifyStr = str.toLowerCase()
    let frequency = new Map()
    for(let char of modifyStr){
        frequency.set(char, (frequency.get(char) || 0) + 1) 
    }
    for(let i=0; i<modifyStr.length; i++){
        if(frequency.get(modifyStr[i]) === 1){
            return i
        }
    }
    return -1
}

console.log(findFirstUniqueChar(str))


//  --------------------------------- another method ----------------------

// var firstUniqChar = function(s) {
    
//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//       return i
//     }
//   }
//   return -1
// };
