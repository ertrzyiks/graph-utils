/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode, useState } from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import { useMediaQuery } from 'react-responsive'

import AppBar from "../AppBar"
import "./layout.css"
import {
  makeStyles,
  createStyles,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  useTheme,
  ListItemText
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const useStyles = makeStyles((theme) =>
  createStyles({
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    }
  }))

const Layout = ({ children, drawerList }: { children: ReactNode, drawerList?: ReactNode }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [open, setOpen] = useState(false)

  const theme = useTheme()
  const hasRegularMenu = useMediaQuery({
    query: `(min-width:${theme.breakpoints.width('md')}px)`
  })

  const hasHamburgerMenu = !hasRegularMenu

  const handleMenuToggle = () => {
    setOpen(!open)
  }

  return (
    <>
      <AppBar title={data.site.siteMetadata.title} onMenuToggle={handleMenuToggle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main style={{ paddingTop: '1em' }}>
          {hasRegularMenu && drawerList && (
            <Drawer
              variant="permanent"
              anchor="left"
            >
              <Toolbar />
              <Divider />
              <List>
                {drawerList}
              </List>
            </Drawer>
          )}

          {hasHamburgerMenu && (
            <Drawer
              variant="temporary"
              anchor="left"
              open={open}
              onClose={() => setOpen(false)}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleMenuToggle}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>

              <ListItem component={Link} to='/' button>
                <ListItemText primary='Home' />
              </ListItem>
              <ListItem component={Link} to='/api' button>
                <ListItemText primary='API' />
              </ListItem>
              <ListItem component={Link} to='/examples' button>
                <ListItemText primary='Examples' />
              </ListItem>
              <ListItem component='a' href='https://github.com/ertrzyiks/graph-utils' button>
                <ListItemText primary='Github' />
              </ListItem>

              <Divider />
              <List>
                {drawerList}
              </List>
            </Drawer>
          )}

          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
