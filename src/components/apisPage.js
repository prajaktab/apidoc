import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import {paymentApisPage} from "./Apis/paymentApisPage";
import {nonPaymentApisPage} from "./Apis/nonPaymentApisPage";
export class apisPage extends Component {
  render() {
    return (
      <div>
        <Route exact path={`${this.props.match.url}`} component={paymentApisPage}/>
        <Route path={`${this.props.match.url}/paymentApis`} component={paymentApisPage}/>
        <Route path={`${this.props.match.url}/nonPaymentApis`} component={nonPaymentApisPage}/>
      </div>
    )
  }
}
