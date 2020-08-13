const fs = require('fs')
const path = require('path')

const { findExports } = require('./findExports')

exports.processFunction = (fileName) => {
  const rawContent = fs.readFileSync(path.join(__dirname, `../../${fileName}`)).toString()

  return findExports(fileName, rawContent)
}
