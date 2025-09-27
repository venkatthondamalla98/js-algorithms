// const reverseWords = (words) => {
//     let arrayOfWords = words.split(' ')
//     let reversedArray = arrayOfWords.map(word => word.split('').reverse().join(''))
//     return reversedArray.join(' ')
// }

const reverseWords = (words) => {
    let arrayOfWords = words.split(" ")
    console.log(arrayOfWords)
    let reversedWords = arrayOfWords.map(word => word.split('').reverse().join(''))
    console.log(reversedWords)
    return reversedWords.join(" ")
}

console.log(reverseWords("hello world"))

// olleh dlrow