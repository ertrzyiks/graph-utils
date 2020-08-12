const fs = require('fs')
const path = require('path')

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
  const rawContent = fs.readFileSync(path.join(__dirname, `../src/examples/${fileName}`)).toString()
  const slug = fileName.slice(3, -4)
  return {
    title: titleize(slug),
    slug: slug,
    rawContent,
    mainContent: getMainContent(rawContent),
    fullContent: getFullContent(rawContent)
  }
}
