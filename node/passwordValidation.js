// The password must be at least 7 characters long but not greater than 31 characters.

// The password must contain at least one number.

// The password must contain at least one capital letter.

// The password must not be the string "password".

// The password must contain at least one punctuation mark or mathematical expression (special character such as !, @, #, $, etc.).


function validatePassword(str){
    if(str.length < 7 || str.length > 31){
        return false
    }
    if(!/\d/.test(str)){
        return false
    }
    if(!/[A-Z]/.test(str)){
        return false
    }
    if(str.toLowerCase() === 'password'){
        return false
    }
    if(!/[!@#$%^&*(),.?":{}|<>]/.test(str)){
        return false
    }
    return true
}

console.log(validatePassword("we78A@;lp"))
