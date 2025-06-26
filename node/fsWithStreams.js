//  send content from file1.txt to file2.txt using fs and streams

const fs = require("fs");

// createReadStream accepts a file path and data like encoding, highwaterMark(for sending specified bites of data)

const readableStream = fs.createReadStream('./file1.txt', {
    encoding: 'utf-8',
    highWaterMark: 2
})

const writeableStream = fs.createWriteStream('./file2.txt')

readableStream.on('data', (chunk) => {
    console.log(chunk)
    writeableStream.write(chunk)
})
