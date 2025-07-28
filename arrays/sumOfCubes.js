 const array = [1, 2, 3, 4, 5]

 const sumOfCubes = (array) => {
    return array.reduce((sum, item) => {
        // sum + item ** 3 --- another way
        return sum += Math.pow(item, 3)
    }, 0)
 }

 console.log(sumOfCubes(array))
