import React from "react";
import { Button, Typography, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import Zoom from "react-reveal/Zoom";

const styles = {
  div: {
    width: "100vw",
    height: "100vh",
    padding: 20,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1649e686711fe3878aaeb7f0b6c5e6de&auto=format&fit=crop&w=1947&q=80)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  text: {
    marginBottom: "5%",
    textAlign: "center",
    textShadow: "1px 1px 1px #4DD0E1, 2px 2px 2px #00838F"
  },
  button: {
    width: 100,
    height: 60,
    fontWeight: "bold",
    fontSize: "1.4em",
    textShadow: "1px 1px 1px #4DD0E1, 2px 2px 2px #00838F",
    "&:hover": {
      transition: "1.5s",
      fontSize: "2.8em",
      width: 200,
      height: 120
    }
  }
};

const LandingPage = props => (
  <div className={props.classes.div}>
    <Typography variant="display3" className={props.classes.text}>
      YOU LANDED ON MY PORTOFOLIO PAGE
    </Typography>
    <Zoom duration={3000}>
      <Button
        variant="outlined"
        className={props.classes.button}
        onClick={props.onClick}
      >
        Enter
      </Button>
    </Zoom>
  </div>
);

LandingPage.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(LandingPage);
