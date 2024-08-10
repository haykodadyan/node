const fs = require('fs')

fs.readFile('nonExistentFile.txt', 'utf-8', (err, data) => {
    if (err){
        console.error(`Error reading file: ${err.message}`)
    } else {
        console.log(data);
    }
})