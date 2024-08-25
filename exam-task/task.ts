import fs from 'fs';
import path from 'path';

function printDirContent(dirPath: string, sizeOfSpace:string = '') {
    if (!fs.existsSync(dirPath)) {
        throw new Error(`Path ${dirPath} does not exists`)
    }

    const stats = fs.statSync(dirPath)
    if (stats.isFile()) {
        console.log(`${sizeOfSpace}f: ${path.basename(dirPath)}`);
    }
    if (stats.isDirectory()) {
        console.log(`${sizeOfSpace}Ⓓ ${path.basename(dirPath)}`);
        sizeOfSpace += '    '
        const content = fs.readdirSync(dirPath)
        // @ts-ignore
        content.forEach(item => {
            const itemPath = path.join(dirPath, item);
            printDirContent(itemPath, sizeOfSpace)
        })
    }
}

const dirPath = path.join(__dirname, 'example-folder');
printDirContent(dirPath);