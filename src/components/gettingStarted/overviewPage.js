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

export class overviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeader: "overview"
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
          <p>{Data.gettingStarted.overview.desc}</p>
          <ul>
            {Data.gettingStarted.overview.compulsary.map((field) => {
              return <li>{field}</li>
            })}
          </ul>
          <p>
            <i>This documentation will walk you through the steps required to integrate
              <b>&nbsp; Jio Money Wallet&nbsp;</b>
              on your website.
            </i>
          </p>
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
