import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import dataset from "../navigation-dataset";

export class AppDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: true
    };
  }

  navigate(url) {
    // this.props.history.push(url);
    // window.history.pushState({},url, url);
  }

  renderListItems = (dataArr) => {
    var self = this;
    return dataArr.map(listItem => <ListItem
          style={{position: "relative"}}
          key={listItem.id}
          primaryText={listItem.name}
          nestedItems={listItem.children ? self.renderListItems.call(self, listItem.children) : []}
          style={{
            backgroundColor: window.location.pathname == listItem.route ? "#eee" : ""
          }}
        >
          <Link style={
            {
              position:"absolute",
               display:"block",
               top:0,
               bottom:0,
               left:0,
               right:0
             }
          } to={listItem.route} />
        </ListItem>
    );
  }

  render() {
    return (
      <Drawer open={this.state.drawerOpen} >
        <List>
          {this.renderListItems.call(this, dataset)}
        </List>
      </Drawer>
    )
  }
}
