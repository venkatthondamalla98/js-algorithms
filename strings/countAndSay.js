const data = '1224445555'

const countAndSay = (data) => {
    if(data.length === 0) return ''
    let result = ''
    let count = 1
    for(let i=1; i<=data.length; i++){
        if(data[i] === data[i-1]){
            count++
        }else{
            result += String(count) + data[i-1]
            count = 1
        }
    }
    return result
}

console.log(countAndSay(data))