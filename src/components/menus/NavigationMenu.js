import React, { Component } from "react";
import { FloatingActionButton } from "material-ui";
import ArrowUp from "material-ui/svg-icons/navigation/arrow-upward";

import NavigationBar from "./NavigationBar";
import NavigationDrawer from "./NavigationDrawer";

const menuLinks = [
  {text: "Home", url: "/"},
  {text: "Project Ideas", url: "/project-ideas"},
];

class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {drawerOpen: false};
    this.handleHamburgerTouchTap = this.handleHamburgerTouchTap.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  handleHamburgerTouchTap(e) {
    this.setState({drawerOpen: !this.state.drawerOpen});
  }

  closeDrawer(e) {
    this.setState({drawerOpen: false});
  }

  render() {
    return (
      <div>
        <NavigationBar onHamburgerTouchTap={this.handleHamburgerTouchTap} menuLinks={menuLinks} />
        <NavigationDrawer drawerOpen={this.state.drawerOpen} closeDrawer={this.closeDrawer} menuLinks={menuLinks}/>
      </div>
    );
  }
}

export default NavigationMenu;
export { menuLinks };
