const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Thomas.')

fs.appendFileSync('notes.txt', ' Second sentence inserted.')