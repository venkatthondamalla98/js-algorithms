let modifiedObject = {}
const flattenObject = (obj, parentKey = '') => {
    for(key in obj){
        let newKey = parentKey ? `${parentKey}-${key}` : key

        if(typeof obj[key] === 'object' && obj[key] !== null){
            flattenObject(obj[key], newKey)
        }else{
            modifiedObject[newKey] = obj[key]
        }
    }
    return modifiedObject;
}

console.log(flattenObject({
    a: {
        b: {
            c: 1,
            d: 2
        },
        e: 3
    },
    f: {
        g: 4
    }
}
))
