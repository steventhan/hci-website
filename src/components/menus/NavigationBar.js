import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, FlatButton, IconButton } from "material-ui";
import Hamburger from "material-ui/svg-icons/navigation/menu";


class NavigationItems extends Component {
  render() {
    let style = {
      marginTop: "6px"
    };

    return (
      <div style={style} className="nav-items">
        {this.props.menuLinks.map(item => {
          return (
            <FlatButton
              key={item.text}
              label={item.text}
              labelStyle={{fontSize: 17}}
              containerElement={
                <NavLink
                  exact to={item.url}
                  activeStyle={{backgroundColor: "#053868"}}>
                </NavLink>
              }
            />
          );
        })}
      </div>
    );
  }
}

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {windowWidth: window.innerWidth};
  }

  componentDidMount() {
    window.addEventListener("resize", (e) => this.setState({windowWidth: window.innerWidth}));
  }

  render() {
    return (
      <AppBar
        style={{
          backgroundColor: "transparent",
          color: "#053868"
        }}
        showMenuIconButton={false}
        iconElementRight={
          this.state.windowWidth < 640 ?
          <IconButton onTouchTap={(e) => this.props.onHamburgerTouchTap(e)}>
            <Hamburger />
          </IconButton> :
          <NavigationItems menuLinks={this.props.menuLinks}  />
        }
        iconStyleRight= {this.state.windowWidth < 640 ? {} : {marginRight: "7%"}}
      >
      </AppBar>
    );
  }
}

export default NavigationBar;
