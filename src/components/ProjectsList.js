import React, { Fragment } from "react";
import { store } from "./store";
import ProjectCard from "./ProjectCard";
import { withStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import Zoom from "react-reveal/Zoom";

const styles = {
  div: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: 600,
    marginTop: 10,
    marginBottom: 20,
    paddingTop: 70
  }
};

const ProjectsList = props => (
  <Fragment>
    <div id="projects" className={props.classes.div}>
      {store.map((project, i) => {
        if (i % 2 === 0) {
          return (
            <Zoom left key={i.toString()} duration={2000}>
              <ProjectCard key={i.toString()} project={project} />
            </Zoom>
          );
        } else {
          return (
            <Zoom right key={i.toString()} duration={2000}>
              <ProjectCard key={i.toString()} project={project} />
            </Zoom>
          );
        }
      })}
    </div>
  </Fragment>
);

ProjectsList.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ProjectsList);
