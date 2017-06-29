import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppDrawer } from "./components/drawer";
import { BodyContent } from "./components/body";

injectTapEventPlugin();

class App extends Component {
  render() {

    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <AppDrawer />
            <BodyContent />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}
export default App;
