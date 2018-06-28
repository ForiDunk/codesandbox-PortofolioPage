import React from "react";
import { AppBar, Toolbar, IconButton, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/lib/fa";

const styles = {
  toolBar: {
    background: "linear-gradient(45deg, #006064 10%, #4DD0E1 60%, #E0F7FA 90%)"
  },
  appBar: {
    opacity: 0.9
  }
};

const Header = props => (
  <AppBar className={props.classes.appBar} position="sticky" color="primary">
    <Toolbar className={props.classes.toolBar}>
      <IconButton
        className={props.classes.buttons}
        href="https://www.facebook.com/forreiter.szabolcs"
        target="_blank"
        variant="fab"
      >
        <FaFacebook />
      </IconButton>
      <IconButton
        className={props.classes.buttons}
        href="https://github.com/ForiDunk"
        target="_blank"
        variant="fab"
      >
        <FaGithub />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/szabolcs-forreiter/"
        target="_blank"
        variant="fab"
      >
        <FaLinkedin />
      </IconButton>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Header);
