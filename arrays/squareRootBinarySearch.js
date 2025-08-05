const squareRoot = (x) => {
    if(x < 2) return x
    let left = 1, right = Math.floor(x / 2), ans = 0
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(mid * mid === x) return mid;
        if(mid * mid < x){
         ans = mid
         left = mid + 1;
        }
        else{
           right = mid - 1
        } 
    }
    return ans;
}

console.log(squareRoot(25))