const countString = (str) => {
    let count = {}
    let splitStr = str.split('');
    for(let ele of splitStr){
        count[ele] = (count[ele] || 0) + 1
    }
    return count
}

console.log(countString("strrting"))