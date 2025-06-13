const checkAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false
    let updatedStr1 = str1.toString()
    let updatedStr2 = str2.toString()
    return updatedStr1.split('').sort().join('') === updatedStr2.split('').sort().join('')
}

console.log(checkAnagram("2341", "werj"))