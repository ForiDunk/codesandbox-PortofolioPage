import React from "react";
import { Button, Tooltip, Typography, withStyles } from "@material-ui/core";
import FileDownload from "@material-ui/icons/FileDownload";
import PropTypes from "prop-types";

const styles = {
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10
  },
  button: {
    background: "radial-gradient(#26C6DA 10%, #006064 90%)",
    color: "white",
    marginTop: 10
  }
};

const CV = props => (
  <div className={props.classes.div}>
    <Typography variant="title">Thank you for visiting!</Typography>
    <Typography variant="caption">You can download my CV here:</Typography>
    <Tooltip title="Download CV">
      <Button
        href="https://drive.google.com/open?id=1tj2qZKHA42bMA0f9Z_WSpL6gzfQ6g9_O"
        target="_blank"
        variant="fab"
        className={props.classes.button}
      >
        <FileDownload />
      </Button>
    </Tooltip>
  </div>
);

CV.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CV);
