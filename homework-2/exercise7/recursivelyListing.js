const fs = require('fs')
const path = require('path')

function listRecursively(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file)
        if (fs.lstatSync(fullPath).isDirectory()) {
            listRecursively(fullPath)
        } else {
            console.log(fullPath);
        }
    })
}

listRecursively('exampleDir')