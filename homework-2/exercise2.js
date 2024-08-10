const fs = require('fs')

fs.mkdirSync('testDir')

fs.writeFileSync('testDir/testFile.txt', 'Some text here', err => {
    if (err) throw err
})

fs.renameSync('testDir/testFile.txt', 'testDir/renamedFile.txt')

fs.unlinkSync('testDir/renamedFile.txt')
fs.rmdirSync('testDir')