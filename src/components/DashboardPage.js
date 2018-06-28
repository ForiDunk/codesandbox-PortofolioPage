import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Footer from "./Footer";
import ProjectsList from "./ProjectsList";
import Introduction from "./Introduction";
import LandingPage from "./LandingPage";
import { withStyles, Button } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = {
  div: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  }
};

class DashboardPage extends React.Component {
  state = {
    landing: true
  };

  handleButtonClick = () => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  };

  handleLanding = () => {
    this.setState({ landing: false });
  };

  render() {
    if (this.state.landing) {
      return <LandingPage onClick={this.handleLanding} />;
    } else {
      return (
        <div className={this.props.classes.div}>
          <CssBaseline />
          <Header />
          <Introduction onClick={this.handleButtonClick} />
          <ProjectsList />
          <Footer />
        </div>
      );
    }
  }
}

DashboardPage.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(DashboardPage);
