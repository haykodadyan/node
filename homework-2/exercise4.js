const fs = require('fs')

const users = [
    { user1: 'Joe', age: 17 },
    { user2: 'Chloe', age: 21 },
    { user3: 'Felix', age: 15 }
]

fs.writeFileSync('data.json', JSON.stringify(users, null, 2))

const jsonData = fs.readFileSync('data.json', 'utf-8')
const usersObj = JSON.parse(jsonData)

users.push({ user4:'Ann', age: 20 })
fs.writeFileSync('data.json', JSON.stringify(users, null, 2))
