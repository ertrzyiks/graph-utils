import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { Link as GatsbyLink } from "gatsby"
import {useMediaQuery} from "react-responsive"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function LayoutAppBar({ title, onMenuToggle }: { title: string, onMenuToggle(): void }) {
  const classes = useStyles()

  const theme = useTheme()
  const hasRegularMenu = useMediaQuery({
    query: `(min-width:${theme.breakpoints.width('md')}px)`
  })

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {hasRegularMenu ? (
            <>
              <Typography variant="h6" className={classes.title}>
                <Link component={GatsbyLink} to='/' color="inherit">{title}</Link>
              </Typography>
              <Button component={GatsbyLink} to='/' color="inherit">Home</Button>
              <Button component={GatsbyLink} to='/api' color="inherit">API</Button>
              <Button component={GatsbyLink} to='/examples' color="inherit">Examples</Button>
              <Button component='a' href='https://github.com/ertrzyiks/graph-utils' color="inherit" aria-label='Github repository'><GitHubIcon/></Button>
            </>
          ) : (
            <IconButton color="inherit" onClick={onMenuToggle}><MenuIcon /></IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}
