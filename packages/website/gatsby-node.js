/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { loadNodeContent } = require('gatsby-source-filesystem')

const examplePagePath = path.resolve('src/templates/ExamplePage.tsx')

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

  const defaultFILE = allFiles[0]
  createPage({
    path: `examples`,
    component: examplePagePath,
    context: {
      exampleName: defaultFILE.name,
      content: await loadNodeContent(defaultFILE)
    }
  })

  for (const file of allFiles) {
    createPage({
      path: `examples/${file.name}`,
      component: examplePagePath,
      context: {
        exampleName: file.name,
        content: await loadNodeContent(file)
      }
    })
  }
}
