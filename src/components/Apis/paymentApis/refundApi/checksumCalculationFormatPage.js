import React, {Component} from 'react';
import SideBar from "../../../sideBar";
import Data from "../../../../data";
export class checksumCalculationFormatPage extends Component {
  render() {
    let alignmentLeft = {
      paddingLeft: 20,
      paddingTop: 20,
      margin: 0
    };
    return (
      <div className="main-content">
      <div className="api-desc">
      <div style={alignmentLeft}>
        {Data.Apis.paymentApis.refundApi.checksumCalculationFormat.tags.join(" | ")}
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
    )
  }
}
