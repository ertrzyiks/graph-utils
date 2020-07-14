const fs = require('fs')

const originalContent = fs.readFileSync('./package.json')
const json = JSON.parse(originalContent)

json.main = './index.js'
json.module = './esm/index.js'

fs.writeFileSync('./build/package.json', JSON.stringify(json, null, 2))
