const fs = require("fs");

const readableStream = fs.createReadStream("./pipeFile.txt", {
    encoding: "utf-8",
    highWaterMark: 2
})

const writeableStream = fs.createWriteStream("./pipeFile2.txt")

readableStream.pipe(writeableStream)