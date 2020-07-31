/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { loadNodeContent } = require('gatsby-source-filesystem')

const examplePagePath = path.resolve('src/templates/ExamplePage.tsx')

const getMainContent = (content) => {
  const result = content.match(/\/\/ <main>(.*)\/\/ <\/main>/s)
  return result ? result[1].trim() : getFullContent(content)
}

const getFullContent = (content) => {
  return content.replace('// <main>\n', '').replace('// </main>\n', '')
}

const slugify = (fileName) => {
  return fileName.slice(3)
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const examples = await graphql(`
    query loadAllExamples {
      allFile(filter: {sourceInstanceName: {eq: "examples"}}) {
        edges {
          node {
            name
            absolutePath
          }
        }
      }
    }
  `, { limit: 1000 })

  const allFiles = examples.data.allFile.edges.map(edge => edge.node)

  const defaultFile = allFiles[0]

  const createExample = async (path, file) => {
    const content = await loadNodeContent(file)

    createPage({
      path,
      component: examplePagePath,
      context: {
        exampleName: file.name,
        content: getMainContent(content),
        fullContent: getFullContent(content)
      }
    })
  }

  await createExample('examples', defaultFile)

  for (const file of allFiles) {
    await createExample(`examples/${slugify(file.name)}`, file)
  }
}
