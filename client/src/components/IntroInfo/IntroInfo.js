import React from "react";
import "./IntroInfo.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
    // eslint-disable-next-line no-undef
  }
}));

export default function IntroInfo() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Welcome to Coffee BLACK
        </Typography>
        <Typography
          component="p"
          fontWeight={900}
          fontSize={24}
          color="grey[500]"
        >
          Here in Atlanta, we pride ourselves on the diverse culture that the
          booming economy has created for its residents. No matter which area of
          the ATL you happen to find yourself in, it is almost guaranteed that
          you will find some hidden treasure that offers moderness, history, and
          a taste of Atlanta culture that is unlike any other city.
          <br />
          <br />
          BLACK aims to shed light on some of the hidden pockets of culture that
          we may have otherwise missed. We begin with Atlanta's variety of black
          owned coffee shops. Use the search tool below to find coffee shops by
          name, location, or coffee type.
        </Typography>
      </Paper>
    </div>
  );
}
