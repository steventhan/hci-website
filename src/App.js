import React, { Component } from "react";
import { getMuiTheme, MuiThemeProvider } from "material-ui/styles";
import { BrowserRouter, Route } from "react-router-dom";
import injectTapEventPlugin from "react-tap-event-plugin";

import theme from "./theme";
import { NavigationMenu } from "./components/menus/";
import HomePage from "./components/home/HomePage";
import ProjectIdeasPage from "./components/projects/ProjectIdeasPage";

import "./App.css";

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <BrowserRouter>
          <div>
            <NavigationMenu />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/project-ideas" component={ProjectIdeasPage} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
