// 1. Write a script that creates a new text file called `example.txt` and writes the string "Hello, World!" into it.
// 2. Modify the script to append "This is Node.js FS module." to the same file.
// 3. Read the contents of `example.txt` and print them to the console.

const fs = require('fs')

fs.writeFileSync('example.txt', 'Hello world', err => {
    if (err) throw err
})

fs.appendFileSync('example.txt', '\nThis is Node.js FS module!', err => {
    if (err) throw err
})

const data = fs.readFile('example.txt', 'utf-8', err => {
    if (err) throw err
})

console.log(data);