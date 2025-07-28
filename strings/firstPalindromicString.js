const firstPalindromString = (words) => {
    for(let word of words){
        if(word === word.split('').reverse().join('')){
            return word
        }
    }
    return ""
}

const words = ["abc","car","ada","racecar","cool"] 

console.log(firstPalindromString(words))