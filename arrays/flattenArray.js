const flattenArray = (array) => {
    let result = [];
    for(let i=0; i<array.length; i++){
        if(Array.isArray(array[i])){
            result = result.concat(flattenArray(array[i]))
        }else{
            result.push(array[i])
        }
    }
    return result
}

console.log(flattenArray([23, [9, [89, 34], [7]]]))