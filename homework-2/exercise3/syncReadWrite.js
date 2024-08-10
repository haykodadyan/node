const fs = require('fs')

fs.writeFileSync('example-2.txt', 'Written synchronously')

const data = fs.readFileSync('example-2.txt', 'utf-8')
console.log(data);