const fs = require('fs')
const path = require('path')

const { getMeta } = require('./getMeta')
const { findImports } = require('./findImports')

const getMainContent = (content) => {
  const result = content.match(/\/\/ <main>(.*)\/\/ <\/main>/s)
  return result ? result[1].trim() : getFullContent(content)
}

const getFullContent = (content) => {
  return content.replace('// <main>\n', '').replace('// </main>\n', '')
}

const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const titleize = (text) => {
  return capitalize(text.replace(/-/g, ' '))
}

exports.processExample = (fileName) => {
  const slug = fileName.slice(3, -4)
  const rawContent = fs.readFileSync(path.join(__dirname, `../../src/examples/${fileName}`)).toString()
  const meta = getMeta(fileName, rawContent)

  const mainContent = getMainContent(rawContent.slice(meta.codeStart))

  const importedFunctions = findImports(fileName, mainContent)

  return {
    title: meta.title,
    shortTitle: meta.shortTitle || titleize(slug),
    slug: slug,
    description: meta.description,
    importedFunctions,
    rawContent,
    mainContent,
    fullContent: getFullContent(rawContent.slice(meta.codeStart))
  }
}
