import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from "../components/seo"
import { Typography, Drawer, List, ListItem, ListItemText, Divider, Toolbar } from '@material-ui/core'
import ExampleContainer from "../components/ExampleContainer/ExampleContainer"
import Layout from "../components/Layout"
import examples from '../examples'

interface ExamplePageProps {
  data: any
  pageContext: {
    exampleName: string
    content: string
  }
  location: string
}

export default function ExamplePage({ data, pageContext, location }: ExamplePageProps) {
  const Component = examples[pageContext.exampleName]

  console.log(pageContext.exampleName)
  return <Layout>
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary='Basic examples' />
        </ListItem>

        {data.allFile.edges.map(({ node }: { node: any }) => (
          <ListItem component={Link} to={`/examples/${node.name.slice(3)}`} button key={node.name} selected={node.name === pageContext.exampleName}>
            <ListItemText primary={node.name.slice(3)} />
          </ListItem>
        ))}
      </List>
    </Drawer>

    <SEO title="Page two" />
    <Typography variant='h2'>Example</Typography>

    <ExampleContainer title={pageContext.exampleName} sourceCode={pageContext.content}>
      <Component />
    </ExampleContainer>
  </Layout>
}

export const pageQuery = graphql`
  query examplesByName {
    allFile(filter: {sourceInstanceName: {eq: "examples"} }, sort: {fields: name}) {
      edges {
        node {
          name
        }
      }
    }
  }
`
