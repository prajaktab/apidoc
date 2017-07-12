import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {AppHeader} from "../header";
import SideBar from "../sideBar";
import Data from "../../data";
import {statusqueryPage} from "./nonPaymentApis/statusqueryPage";
import {checkpaymentStatusApiPage} from "./nonPaymentApis/checkpaymentStatusApiPage";
import {getrequeststatusPage} from "./nonPaymentApis/getrequeststatusPage";
import {getmdrPage} from "./nonPaymentApis/getmdrPage";
import {gettransactiondetailsPage} from "./nonPaymentApis/gettransactiondetailsPage";
import {fetchtransactionaldetailsPage} from "./nonPaymentApis/fetchtransactionaldetailsPage";
import {gettodaysdataPage} from "./nonPaymentApis/gettodaysdataPage";
export class nonPaymentApisPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeader: "NonPayment Api"
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
        <Route exact path={this.props.match.url} render={() => {
          return (
            <div>
            <div className="main-content">
            <div className="api-desc">
              <AppHeader title={this.state.appHeader}/>
              <div style={alignmentLeft}>Non Payment Apis  </div>
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
            </div>
          )
        }}/>
        <Route path={`${this.props.match.url}/statusquery`} component={statusqueryPage}/>
        <Route path={`${this.props.match.url}/checkpaymentStatusApi`} component={checkpaymentStatusApiPage}/>
        <Route path={`${this.props.match.url}/getrequeststatus`} component={getrequeststatusPage}/>
        <Route path={`${this.props.match.url}/getmdr`} component={getmdrPage}/>
        <Route path={`${this.props.match.url}/gettransactiondetails`} component={gettransactiondetailsPage}/>
        <Route path={`${this.props.match.url}/fetchtransactionaldetails`} component={fetchtransactionaldetailsPage}/>
        <Route path={`${this.props.match.url}/gettodaysdata`} component={gettodaysdataPage}/>
      </div>
    )
  }
}
