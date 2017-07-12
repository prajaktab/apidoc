import React, { Component } from 'react';
import { AppHeader } from "./header";
import SideBar from "./sideBar";

export class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appHeader: "Home Page"  
    }
  }
  render() {
    return (
      <div>
        <div className="main-content">
          <div className="api-desc">
            <AppHeader title={this.state.appHeader} />
            <h1>This is HOME</h1>
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
