const fs = require('fs')

const readStream = fs.createReadStream('originalFile.txt')
const writeStream = fs.createWriteStream('copiedFile.txt')

readStream.on('data', (chunk) => {
    writeStream.write(chunk)
})

readStream.on('end', () => {
    writeStream.end()
    console.log('File copied (without pipe).');
})