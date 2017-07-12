import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import {AppHeader} from "../header";
import SideBar from "../sideBar";
import Data from "../../data";
import {purchaseApiPage} from "./paymentApis/purchaseApiPage";
import {refundApiPage} from "./paymentApis/refundApiPage";
export class paymentApisPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeader: "payment Api"
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
              <div style={alignmentLeft}>
                {Data.Apis.paymentApis.desc}
                <ol>
                  {Data.Apis.paymentApis.consistsApis.map((text) => {
                    return <li>{text}</li>
                  })}
                </ol>
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
            </div>
          )
        }}/>
        <Route path={`${this.props.match.url}/purchaseApi`} component={purchaseApiPage}/>
        <Route path={`${this.props.match.url}/refundApi`} component={refundApiPage}/>
      </div>
    )
  }
}
