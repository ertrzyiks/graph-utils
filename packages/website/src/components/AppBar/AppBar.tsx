import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as GatsbyLink } from "gatsby"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

export default function LayoutAppBar({ title }: { title: string }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link component={GatsbyLink} to='/' color="inherit">{title}</Link>
          </Typography>
          <Button component={GatsbyLink} to='/'color="inherit">Home</Button>
          <Button component={GatsbyLink} to='/examples' color="inherit">Examples</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
