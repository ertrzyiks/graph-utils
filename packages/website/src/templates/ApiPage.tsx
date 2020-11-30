import React from 'react'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { Box, List, ListItem, ListItemText, ListSubheader, Typography } from '@material-ui/core'
import Layout from "../components/Layout"
import ApiFunction from '../components/ApiFunction'
import ApiType from '../components/ApiType'
import { LoadAllFunctionsQuery } from '../graphqlTypes'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360
  }
}));

interface ExamplePageProps {
  data: LoadAllFunctionsQuery
}


export default function ApiPage({ data }: ExamplePageProps) {
  const functions = data.allFunction.nodes

  const classes = useStyles()

  return <Layout>
    <SEO title='API' />

    <Box mb={10}>
      <Typography variant='h5'>Table of Contents</Typography>

      <Box mb={5}>
        <List dense component='div' className={classes.root}>
          <ListSubheader component='div' disableGutters>Types</ListSubheader>
          <ListItem button component="a" href='#graph'>
            <ListItemText>Graph</ListItemText>
          </ListItem>
          <ListItem button component="a" href='#nodeid'>
            <ListItemText>NodeId</ListItemText>
          </ListItem>

          <ListSubheader component='div' disableGutters>Functions</ListSubheader>
          {functions.map((fn, index) => (
            <ListItem button component='a' href={`#${fn.slug}`}>
              <ListItemText>{fn.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
    <Box mb={10}>
      <ApiType name='Graph' slug='graph' signature='Graph<NodeData = {}, EdgeData = {}>'>
        Graph type is a core of the library. It accepts two generic parameters: shape of the custom properties of the nodes
        and edges.
      </ApiType>
    </Box>

    <Box mb={10}>
      <ApiType name='NodeId' slug='nodeid' signature='NodeId = string'>
        The library supports only string ids for the nodes. To distinguish it from other string values all functions taking
        node is as a param use NodeId alias to hint it's purpose.
      </ApiType>
    </Box>

    {functions.map((fn, index) => (
      <Box key={index} mb={10}>
        <ApiFunction data={fn} />
      </Box>
    ))}
  </Layout>
}

export const pageQuery = graphql`
  query loadAllFunctions {
    allFunction(sort: {fields: name}) {
      nodes {
        name
        signature
        slug
        params {
          name
          type
        }
        jsDoc {
          comment
          tags {
            comment
            name
            type  
            tagName
          }
        }
      }
    }
  }
`
