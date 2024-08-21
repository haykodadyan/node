const { Readable, Writable } = require('stream');

const readableStream = new Readable({
    read(size) {
        setTimeout(() => {
            this.push('Data chunk');
        }, 100);
    }
});

const writableStream = new Writable({
    write(chunk, encoding, callback) {
        setTimeout(() => {
            console.log(`Writing: ${chunk.toString()}`);
            callback();
        }, 1000);
    }
});

function writeData() {
    const chunk = readableStream.read();
    if (chunk !== null) {
        const canWrite = writableStream.write(chunk);
        if (!canWrite) {
            writableStream.once('drain', writeData);
        } else {
            process.nextTick(writeData);
        }
    }
}

readableStream.on('readable', writeData)
