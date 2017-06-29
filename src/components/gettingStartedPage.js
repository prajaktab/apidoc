import React, {Component} from 'react';
import {AppHeader} from "./header";
import {Switch, Route} from "react-router-dom";
export class gettingStarted extends Component {
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
        <AppHeader exact title={this.state.appHeader}/>
        <div style={alignmentLeft}>gettingStarted</div>
      </div>
    )
  }
}
