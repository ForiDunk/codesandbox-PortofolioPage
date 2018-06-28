import React from "react";
import CV from "./CV";
import {
  Button,
  Avatar,
  Typography,
  Drawer,
  Divider,
  withStyles
} from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  typograpth: {
    margin: 5,
    marginBottom: 20
  },
  avatar: {
    width: 60,
    height: 60,
    marginLeft: 5,
    marginTop: 5
  }
};

const Contact = props => (
  <Drawer open={props.open} onClose={props.close}>
    <Avatar
      className={props.classes.avatar}
      alt="Szabolcs Forreiter"
      src="https://image.ibb.co/iLgtx8/2015_05_25_14_29_09_512.jpg"
    />
    <Typography
      className={props.classes.typograpth}
      variant="headline"
      color="secondary"
    >
      Szabolcs Forreiter
    </Typography>
    <Button href="https://github.com/ForiDunk" target="_blank">
      GitHub
    </Button>
    <Divider />
    <Button href="https://www.facebook.com/forreiter.szabolcs" target="_blank">
      Facebook
    </Button>
    <Divider />
    <Button
      href="https://www.linkedin.com/in/szabolcs-forreiter/"
      target="_blank"
    >
      LinkedIn
    </Button>

    <CV />
  </Drawer>
);

Contact.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Contact);
