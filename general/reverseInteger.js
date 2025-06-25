function reverse(x) {
    // max value is 2 power 31 and min value is -2^31
    let max = Math.pow(2, 31) -1 
    let min = -Math.pow(2, 31);
    // absoulte value -> to string -> split -> reverse it -> join - convert to integer
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''))
    //  if value is greater than 2 power 31 -1 then return 0
    if(reversed > max) return 0;
    //  if x is negative value then reversed value with "-" else reversed value
    return x < 0 ? -reversed : reversed 
}

console.log(reverse(123))