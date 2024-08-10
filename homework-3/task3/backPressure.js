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

readableStream.pipe(writableStream);

writableStream.on('drain', () => {
    console.log('Writable stream is drained, resuming readable stream.');
});
