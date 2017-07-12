import React, {Component} from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import {AppHeader} from "../header";
import SideBar from "../sideBar";

import Data from "../../data";
export class integrationKitsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeader: "Integration Kits"
    }
  }
  render() {
    let alignmentLeft = {
      paddingLeft: 20,
      paddingTop: 20
    };
    return (
      <div>
      <div className="main-content">
        <div className="api-desc">
        <AppHeader title={this.state.appHeader}/>
        <div style={alignmentLeft}>
          <p>{Data.webIntegration.integrationKits.desc}</p>
          <p>{Data.webIntegration.integrationKits.meth}</p>
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
  }
}
