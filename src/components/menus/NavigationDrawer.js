import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Drawer, MenuItem } from "material-ui";

class NavigationDrawer extends Component {
  constructor(props) {
    super(props);
    this.handleRequestChange = this.handleRequestChange.bind(this);
  }

  handleRequestChange(open, reason) {
    if (reason === "clickaway" || "escape") {
      this.props.closeDrawer();
    }
  }

  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.drawerOpen}
        openSecondary
        disableSwipeToOpen
        onRequestChange={this.handleRequestChange}
      >
          <br />
        {this.props.menuLinks.map((link, indx) => {
          return (
            <MenuItem
              key={indx}
              onTouchTap={this.props.closeDrawer}
              primaryText={link.text}
              containerElement={
                <NavLink
                  exact
                  to={link.url}
                  activeClassName="drawer-item-active"
                  activeStyle={{borderLeft: "4px solid #fdfdfd"}}>
                </NavLink>
              }
            />
          );
          })}
      </Drawer>
    );
  }
}

export default NavigationDrawer;
