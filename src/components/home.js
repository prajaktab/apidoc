import React, { Component } from 'react';
import { AppHeader } from "./header";

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
        <AppHeader title={this.state.appHeader} />
        <h1>This is HOME</h1>
      </div>
    )
  }
}
