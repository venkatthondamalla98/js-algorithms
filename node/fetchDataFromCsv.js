// const fs = require('fs');

// fs.readFile("./dummy.csv", "utf-8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     // Split CSV into rows
//     const rows = data.trim().split("\n");

//     // Extract header (first row)
//     const headers = rows[0].split(",");
//     console.log(headers)

//     // Extract data rows (excluding header)
//     const dataRows = rows.slice(1);

//     // Convert each row into an object
//     const result = dataRows.map(row => {
//         const values = row.split(",");
//         let obj = {};
//         headers.forEach((header, index) => {
//             obj[header] = values[index];
//         });
//         return obj;
//     });

//     // Print objects
//     // console.log(result);

//     // Example: print regionName for each row
//     result.forEach(item => {
//         console.log(`Region: ${item.regionName}, Plant: ${item.plantName}`);
//     });
// });



const fs = require("fs");

let readData = fs.readFile("./dummy.csv", "utf-8", (err, data) => {
    if(err){
        console.log(err)
        return err
    }

    let allRows = data.trim().split("\n")
    let headers = allRows[0].split(",")
    let rows = allRows.slice(1)

    let result = rows.map((row) => {
        let values = row.split(",")
        let obj = {}
        headers.forEach((header, index) => {
            obj[header] = values[index]
        })
        return obj
    })
console.log(result)
})