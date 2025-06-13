const checkPalindromeScore = (str) => {
    let modfiyString = str.toLowerCase().split(',')
    let score = 0;
    for(let i=0; i<modfiyString.length; i++){
        let cleanString = modfiyString[i].replace(/[^a-z0-9]/g, '')
        let reversedString = cleanString.split('').reverse().join('')
        if(cleanString === reversedString){
            if(reversedString.length === 4){
                score += 5
            }else if(reversedString.length === 5){
                score +=10
            }
        }
    }
    return score
}

console.log(checkPalindromeScore("madam, abCba, abba"))
