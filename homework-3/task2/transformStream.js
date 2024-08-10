const fs = require('fs')
const { Transform } = require('stream')

const transformStream = new Transform({
    readableObjectMode: true,
    writableObjectMode: true,
    transform(chunk, encoding, callback) {
        let jsonObj
        try {
            jsonObj = JSON.parse(chunk.toString())
        } catch(err) {
            return callback(err)
        }

        jsonObj.timestamp = new Date()
        this.push(JSON.stringify(jsonObj, null, 2))
        callback()
    }
})

const readStream = fs.createReadStream('originalFile.json')
const writeStream = fs.createWriteStream('copiedFile.json')

readStream.pipe(transformStream).pipe(writeStream)

writeStream.on('finish', () => {
    console.log('JSON object transformed and written successfully.');
})