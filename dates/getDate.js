const checkLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) 
}

const getDate = (dd, mm, yyyy, days) => {
    const daysInMonths = [31, (checkLeapYear(yyyy) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    dd += days;

    while(dd > daysInMonths[mm - 1]){
        dd -= daysInMonths[mm - 1]
        mm++
        if(mm > 12){
            mm = 1;
            yyyy++
        }
    }
    return dd + "-" + mm + "-" + yyyy
}

console.log(getDate(1, 1, 2025, 240))
