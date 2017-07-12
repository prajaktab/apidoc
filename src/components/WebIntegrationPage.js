import React, {Component} from 'react';
import {AppHeader} from "./header";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {integrationKitsPage} from "./webIntegration/integrationKitsPage";
import {checkoutButtonPage} from "./webIntegration/checkoutButtonPage";
import {NotFoundPage} from "./NotFoundPage";
export class WebIntegration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeader: "Getting Started"
    }
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path={`${this.props.match.url}`} component={checkoutButtonPage}/>
          <Route path={`${this.props.match.url}/integrationKits`} component={integrationKitsPage}/>
          <Route path={`${this.props.match.url}/checkoutButton`} component={checkoutButtonPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    )
  }
}
