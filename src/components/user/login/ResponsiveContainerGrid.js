import React from "react";
import { withStyles, createStyleSheet } from "material-ui/styles";
import Grid from "material-ui/Grid";

import ResponsiveConstants from "./ResponsiveConstants";

const styleSheet = createStyleSheet(theme => ({
  root: {
    [theme.breakpoints.up(ResponsiveConstants.mobileBreakpoint)]: {
      "min-height": 500
    }
  }
}));

function ResponsiveContainerGrid(props) {
  const classes = props.classes;
  const { children } = props;
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="center"
      align="center"
    >
      {children}
    </Grid>
  );
}

export default withStyles(styleSheet)(ResponsiveContainerGrid);
