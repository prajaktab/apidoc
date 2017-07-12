import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {AppHeader} from "../../header";
import SideBar from "../../sideBar";
import Data from "../../../data";
import {URLsPage} from "./statusquery/URLsPage";
import {checksumFormatPage} from "./statusquery/checksumFormatPage";
import {requestParametersPage} from "./statusquery/requestParametersPage";
import {responseChecksumFormatPage} from "./statusquery/responseChecksumFormatPage";
import {responseParametersPage} from "./statusquery/responseParametersPage";
import {errorCodesPage} from "./statusquery/errorCodesPage";
export class statusqueryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeader: "Statusquery"
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
            <div style={alignmentLeft}>{Data.Apis.nonPaymentApis.statusquery.desc}
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
        <Route path={`${this.props.match.url}/responseChecksumFormat`} component={responseChecksumFormatPage}/>
        <Route path={`${this.props.match.url}/responseParameters`} component={responseParametersPage}/>
        <Route path={`${this.props.match.url}/errorCodes`} component={errorCodesPage}/>
      </div>
    )
  }
}
