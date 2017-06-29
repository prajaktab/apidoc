import React, {Component} from 'react';
import {AppHeader} from "./header";
import {Switch, Route} from "react-router-dom";
import {overviewPage} from "./gettingStarted/overviewPage";
import {onBoardingProcessPage} from "./gettingStarted/onBoardingProcessPage";
import {howDoesThePaymentProcessWorkPage} from "./gettingStarted/howDoesThePaymentProcessWorkPage";
export class apisPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeader: "overview"
    }
  }
  render() {
    let alignmentLeft = {
      paddingLeft: 20,
      paddingTop: 20
    };
    return (
      <div>
        <AppHeader exact title={this.state.appHeader}/>
        <div style={alignmentLeft}>
          <Route exact path={`${this.props.match.url}/overviewPage`} component={overviewPage}/>
          <Route path={`${this.props.match.url}/onBoardingProcessPage`} component={onBoardingProcessPage}/>
          <Route path={`${this.props.match.url}/howDoesThePaymentProcessWorkPage`} component={howDoesThePaymentProcessWorkPage}/>
        </div>
      </div>
    )
  }
}
