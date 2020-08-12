/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { loadNodeContent } = require('gatsby-source-filesystem')

const { processExample } = require('./gatsby-node/exampleProcessing')
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
      allExample(sort: {fields: position}) {
        nodes {
          title
          slug
          mainContent
          fullContent
        }
      }
    }
  `, { limit: 1000 })

  const allExample = examples.data.allExample.nodes

  const defaultExample = allExample[0]

  const createExample = async (path, example) => {
    createPage({
      path,
      component: examplePagePath,
      context: {
        example
      }
    })
  }

  await createExample('examples', defaultExample)

  for (const example of allExample) {
    await createExample(`examples/${example.slug}`, example)
  }
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const examples = await Promise.all([
    '01-add-node.tsx',
    '02-add-node-with-data.tsx',
    '03-add-edge.tsx',
    '04-add-edge-with-data.tsx',
    '05-find-the-closest-path.tsx'
  ].map(processExample))

  examples
    .forEach((example, index) => {
      const node = {
        slug: example.slug,
        title: example.title,
        rawContent: example.rawContent,
        mainContent: example.mainContent,
        fullContent: example.fullContent,
        position: index,
        id: createNodeId(`Example-${example.slug}`),
        internal: {
          type: 'Example',
          contentDigest: createContentDigest(example),
        },
      }
      actions.createNode(node)
    })
}
