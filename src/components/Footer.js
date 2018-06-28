import React, { Fragment } from "react";
import { AppBar, Toolbar, withStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import CV from "./CV";

const styles = {
  toolBar1: {
    minHeight: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold"
  },
  toolBar2: {
    minHeight: 80,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center"
  }
};

const Footer = props => (
  <Fragment>
    <AppBar position="sticky" color="primary">
      <Toolbar className={props.classes.toolBar2}>
        <CV />
      </Toolbar>
    </AppBar>
    <AppBar
      className={props.classes.appBar}
      position="sticky"
      color="secondary"
    >
      <Toolbar className={props.classes.toolBar1}>
        <Typography variant="caption">
          &copy; {new Date().getFullYear()} Copyright:
          <a
            className={props.classes.name}
            target="_blank"
            href="https://fori-portofolio.herokuapp.com/"
          >
            Szabolcs Forreiter
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  </Fragment>
);

Footer.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Footer);
