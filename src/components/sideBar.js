import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Tabs>
          <Tab style={{height: "64px", background: "#242729", borderRight: "1px solid #fff"}} label="JSON">
            <div className="json-body">
              {this.props.json}
            </div>
          </Tab>
          <Tab style={{height: "64px", background: "#242729"}} label="XML">
            <div className="xml-body">
              {this.props.xml}
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}
