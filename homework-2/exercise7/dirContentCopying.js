const fs = require('fs')
const path = require('path')

function copyDirectory(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest)
    }

    fs.readdirSync(src).forEach(file => {
        const srcPath = path.join(src, file)
        const destPath = path.join(dest, file)
        if (fs.lstatSync(srcPath).isDirectory()) {
            copyDirectory(srcPath, destPath)
        } else {
            fs.copyFileSync(srcPath, destPath)
        }
    })
}

copyDirectory('exampleDir', 'copiedDir')