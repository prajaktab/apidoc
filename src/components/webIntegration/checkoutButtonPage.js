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
export class checkoutButtonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeader: "checkout Button"
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
          <p>{Data.webIntegration.checkoutButton.desc}</p>
          <p>{Data.webIntegration.checkoutButton.desc}</p>
          <p>{Data.webIntegration.checkoutButton.desc2}</p>
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
