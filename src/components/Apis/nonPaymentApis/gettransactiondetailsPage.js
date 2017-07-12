import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {AppHeader} from "../../header";
import Data from "../../../data";
import {URLsPage} from "./gettransactiondetails/URLsPage";
import {checksumFormatPage} from "./gettransactiondetails/checksumFormatPage";
import {requestParametersPage} from "./gettransactiondetails/requestParametersPage";
import {responseParametersPage} from "./gettransactiondetails/responseParametersPage";
import {errorCodesPage} from "./gettransactiondetails/errorCodesPage";
export class gettransactiondetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeader: "Gettrans Action Details"
    }
  }
  render() {
    let alignmentLeft = {
      paddingLeft: 20,
      paddingTop: 20,
      margin: 0
    };
    return (
      <div>
        <AppHeader title={this.state.appHeader}/>
        <Route exact path={this.props.match.url} render={() => {
          return (
            <div style={alignmentLeft}>{Data.Apis.nonPaymentApis.gettransactiondetails.desc}
            </div>
          )
        }}/>
        <Route path={`${this.props.match.url}/URLs`} component={URLsPage}/>
        <Route path={`${this.props.match.url}/checksumFormat`} component={checksumFormatPage}/>
        <Route path={`${this.props.match.url}/requestParameters`} component={requestParametersPage}/>
        <Route path={`${this.props.match.url}/responseParameters`} component={responseParametersPage}/>
        <Route path={`${this.props.match.url}/errorCodes`} component={errorCodesPage}/>
      </div>
    )
  }
}
