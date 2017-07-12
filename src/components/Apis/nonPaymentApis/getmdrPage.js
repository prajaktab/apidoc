import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {AppHeader} from "../../header";
import Data from "../../../data";
import {URLsPage} from "./getmdr/URLsPage";
import {checksumFormatPage} from "./getmdr/checksumFormatPage";
import {requestParametersPage} from "./getmdr/requestParametersPage";
import {responseParametersPage} from "./getmdr/responseParametersPage";
import {errorCodesPage} from "./getmdr/errorCodesPage";
export class getmdrPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeader: "Getmdr"
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
            <div style={alignmentLeft}>{Data.Apis.nonPaymentApis.getmdr.desc}
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
