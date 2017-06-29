import React, { Component } from 'react';
import { AppHeader } from "./header";

export class NotFoundPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appHeader: "Page not found"
    }
  }
  render() {
    return (
      <div>
        <AppHeader title={this.state.appHeader} />
        <p>404</p>
      </div>
    )
  }
}
