const fs = require('fs')



// const createFile = fs.writeFile("fsFileCreated.csv", "Hello World", "utf8", (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file created")
//     }
// })

// const readFile = fs.readFile("./fsFileCreated.txt", "utf8", (err, data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// const appendFile = fs.appendFile("./fsFileCreated.txt", ", Im ready to explore", 'utf8', (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Text added successfully")
//     }
// })

// const checkFile = fs.access('fsFileCreated.txt', (err) => {
//     if(err){
//         console.log("File does not exist")
//     }else{
//         console.log("File exists")
//     }
// })

// const deleteFile = fs.unlink('fsFileCreated.txt', (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File deleted successfully")
//     }
// })

// const createFolder = fs.mkdir("fsFolders", (err) => {
//     if(err){
//         console.log(`${err} error in creating a folder`)
//     }else{
//         console.log("Folder created successfully")
//     }
// })