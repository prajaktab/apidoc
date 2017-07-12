import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {AppHeader} from "../../header";
import SideBar from "../../sideBar";
import Data from "../../../data";
import {URLsPage} from "./checkpaymentStatusApi/URLsPage";
import {checksumFormatPage} from "./checkpaymentStatusApi/checksumFormatPage";
import {requestParametersPage} from "./checkpaymentStatusApi/requestParametersPage";
import {responseParametersPage} from "./checkpaymentStatusApi/responseParametersPage";
import {errorCodesPage} from "./checkpaymentStatusApi/errorCodesPage";
export class checkpaymentStatusApiPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeader: "Refund Api"
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
            <div className="main-content">
            <div className="api-desc">
            <div style={alignmentLeft}>{Data.Apis.nonPaymentApis.checkpaymentStatusApi.desc}
            </div>
            </div>
            <SideBar xml={
                <div>
                  <p> this is xml data </p>
                </div>
              } json={
                <div>
                  <p> this is json data </p>
                </div>
              }
            />
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
