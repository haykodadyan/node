const fs = require('fs')

const readStream = fs.createReadStream('originalFile.txt')
const writeStream = fs.createWriteStream('copiedFile.txt')

readStream.pipe(writeStream)

writeStream.on('finish', () => {
    console.log('Files copied (with pipe).');
})