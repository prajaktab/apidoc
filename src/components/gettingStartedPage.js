import React, {Component} from 'react';
import {AppHeader} from "./header";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {overviewPage} from "./gettingStarted/overviewPage";
import {onBoardingProcessPage} from "./gettingStarted/onBoardingProcessPage";
import {howDoesThePaymentProcessWorkPage} from "./gettingStarted/howDoesThePaymentProcessWorkPage";
import {NotFoundPage} from "./NotFoundPage";
export class gettingStarted extends Component {
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
          <Route exact path={`${this.props.match.url}/overviewPage`} component={overviewPage}/>
          <Route path={`${this.props.match.url}/onBoardingProcess`} component={onBoardingProcessPage}/>
          <Route path={`${this.props.match.url}/howDoesThePaymentProcessWork`} component={howDoesThePaymentProcessWorkPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    )
  }
}
