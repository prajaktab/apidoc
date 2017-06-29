import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
//import {refundAPIPage} from "./webIntegration/checkoutButtonPage";
import {integrationKitsPage} from "./webIntegration/integrationKitsPage";
export class WebIntegration extends Component {
  render() {
    return (
      <div>
        <Route exact path={`${this.props.match.url}`} component={integrationKitsPage}/>
      </div>
    )
  }
}
