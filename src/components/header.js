import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

export class  AppHeader extends Component  {
  showIconHeader = false;
  render() {
    return(
      <AppBar
        title={this.props.title}
        showMenuIconButton={this.showIconHeader}
      />
    )
  }
}
