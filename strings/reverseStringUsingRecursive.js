const str = "venkat"

const reverseUsingRecursive = (str) => {
    if(str.length <= 1) return str
    // 1. str.slice(1) ---> enkat 
    //  str[0]  ------> v
    // 2. str.slice(1)  ----> nkat
    //  str[0]  ------> e
    return reverseUsingRecursive(str.slice(1)) + str[0]
}

console.log(reverseUsingRecursive(str))