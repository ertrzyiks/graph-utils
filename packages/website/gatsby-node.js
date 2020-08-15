/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const glob = require('glob')
const slugify = require('slugify')

const { processExample } = require('./gatsby-node/exampleProcessing')
const { processFunction } = require('./gatsby-node/functionProcessing')
const examplePagePath = path.resolve('src/templates/ExamplePage.tsx')
const apiPagePath = path.resolve('src/templates/ApiPage.tsx')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const examples = await graphql(`
    query loadAllExamples {
      allExample(sort: {fields: position}) {
        nodes {
          title
          description
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

  createPage({
    path: '/api',
    component: apiPagePath
  })
}

const allFiles = (pattern) => {
  return new Promise((resolve, reject) => {
    glob(pattern, async (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  })
}

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const exampleFiles = await allFiles('src/examples/*.tsx')
  const examples = await Promise.all(exampleFiles.map(filePath => path.basename(filePath)).map(processExample))

  const relatedExamples = {}

  await Promise.all(examples
    .map((example, index) => {
      const { importedFunctions, ...exampleData } = example

      importedFunctions.forEach(name => {
        relatedExamples[name] = relatedExamples[name] || []
        relatedExamples[name].push(exampleData.slug)
      })

      const node = {
        ...exampleData,
        related___NODE: importedFunctions.map(name => createNodeId(`Function-${name}`)),
        position: index,
        id: createNodeId(`Example-${example.slug}`),
        internal: {
          type: 'Example',
          contentDigest: createContentDigest(example),
        },
      }
      return actions.createNode(node)
    })
  )

  const functionFiles = await allFiles('../graph-utils/src/**/*.ts')
  const functions = await Promise.all(functionFiles.map(processFunction))

  await Promise.all(functions
    .flat()
    .map(fnData => {
      const node = {
        ...fnData,
        slug: slugify(fnData.name),
        relatedExamples___NODE: (relatedExamples[fnData.name] || []).map(slug => createNodeId(`Example-${slug}`)),
        id: createNodeId(`Function-${fnData.name}`),
        internal: {
          type: 'Function',
          contentDigest: createContentDigest(fnData),
        },
      }
      return actions.createNode(node)
    })
  )
}
