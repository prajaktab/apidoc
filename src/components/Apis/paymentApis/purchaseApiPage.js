import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {AppHeader} from "../../header";
import SideBar from "../../sideBar";
import Data from "../../../data";
import {URLsPage} from "./purchaseApi/URLsPage";
import {checksumFormatPage} from "./purchaseApi/checksumFormatPage";
import {requestParametersPage} from "./purchaseApi/requestParametersPage";
import {responseChecksumPage} from "./purchaseApi/responseChecksumPage";
import {responseParametersPage} from "./purchaseApi/responseParametersPage";
import {errorCodesPage} from "./purchaseApi/errorCodesPage";
export class purchaseApiPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeader: "Purchase Api"
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
            <div style={alignmentLeft}>{Data.Apis.paymentApis.purchaseApi.desc}
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
        <Route path={`${this.props.match.url}/responseChecksum`} component={responseChecksumPage}/>
        <Route path={`${this.props.match.url}/responseParameters`} component={responseParametersPage}/>
        <Route path={`${this.props.match.url}/errorCodes`} component={errorCodesPage}/>
      </div>
    )
  }
}
