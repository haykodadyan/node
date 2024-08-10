const fs = require('fs')

fs.stat('file.txt', (err, stats) => {
    if (err) throw err

    console.log(`File size: ${stats.size}`);
    console.log(`Creation date: ${stats.birthtime}`);
})

fs.chmod('file.txt', 0o444, err => {
    if (err) throw err

    console.log(`Permission was changed to read-only.`);
})