import React from "react";
import { Avatar, Typography, withStyles, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/lib/fa";

const styles = {
  div: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    marginTop: 130,
    marginBottom: 130,
    maxWidth: 500
  },
  avatar: {
    width: 200,
    height: 200,
    marginBottom: 50,
    "&:hover": {
      width: 250,
      height: 250,
      transition: "1s"
    }
  },
  text: {
    margin: 10
  },
  toProjectsText: {
    marginTop: 40,
    marginBottom: 20
  },
  mainText: {
    margin: 30
  },
  friends: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 700
  }
};

const Introduction = props => (
  <div className={props.classes.div}>
    <Avatar
      className={props.classes.avatar}
      alt="Szabolcs Forreiter"
      src="https://image.ibb.co/iLgtx8/2015_05_25_14_29_09_512.jpg"
    />
    <Typography
      className={props.classes.mainText}
      color="secondary"
      variant="headline"
    >
      Hello, let me introduce myself:
    </Typography>
    <br />
    <Typography
      className={props.classes.text}
      color="secondary"
      variant="subheading"
    >
      My name is Szabolcs Forreiter and I LOVE coding!
    </Typography>
    <Typography
      className={props.classes.text}
      color="secondary"
      variant="body1"
    >
      <br />
      I am a former professional basketball player and I've played around 16
      years (I feel old...). Nowadays I spend less time on the court and more
      time in front of a PC or a laptop.
      <br />
      Different sport but the same passion and focus.
      <br />
      I am a very competitive person, I mostly got that from growing up as the
      youngest child. My competitiveness was raised to an other level when I
      started to play basketball at a young age.
      <br />
      During my career as an athlete I managed to master the ability to work in
      a team, in a multi cultural enviroment. With some of my former teammates I
      keep in touch up to this day and I consider them my friends.
      <br />
      Basketball was more than just a job for me. I played basketball all day
      long. It didn't matter where, when or with whom.
      <br />
      I got lucky not once, but twice. I found an other passion at the start of
      2017, that is coding.
      <br />
      Usually athletes have a hard time finding something that they truly like
      after they retire from their sports activity.
      <br />
      Coding for me is the same as basketball. It is someting I find myself
      often doing it for fun, in my spare time.
      <br />
      Doing something that you love as a profession is something everyone wants
      to accomplish.
      <br />
      We only live once, so why not go after the things you want in life.
    </Typography>
    <Typography className={props.classes.toProjectsText} variant="subheading">
      Below you can find some of my projects
    </Typography>
    <Button size="large" variant="outlined" onClick={props.onClick}>
      <FaChevronDown />
    </Button>
  </div>
);

Introduction.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Introduction);
