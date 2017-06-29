import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {HomePage} from "./home"
import {gettingStarted} from "./gettingStartedPage"
import {WebIntegration} from "./WebIntegrationPage"
import {apisPage} from "./apisPage"
import {NotFoundPage} from "./NotFoundPage"
export class BodyContent extends Component {
  render() {
    let mainBodyStyle = {
      marginLeft: 256
    };
    return (
      <div style={mainBodyStyle}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/gettingStartedPage" component={gettingStarted}/>
          <Route path="/WebIntegrationPage" component={WebIntegration}/>
          <Route path="/apisPage" component={apisPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    )
  }
}
