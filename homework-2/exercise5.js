const fs = require('fs')

fs.watch('exercise3', (event, filename) => {
    if (filename) {
        console.log(`${event} on file: ${filename}`);
    }
})