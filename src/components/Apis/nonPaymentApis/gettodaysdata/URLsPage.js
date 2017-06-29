import React, { Component } from 'react';

import Data from "../../../../data";

export class URLsPage extends Component {
  render() {
    return (
      <div>
          <b>Test URL </b>{Data.webIntegration.paymentApis.purchaseApi.urls.testUrl}<br/>
          <b>Production URL </b>{Data.webIntegration.paymentApis.purchaseApi.urls.productionUrl}
      </div>
    )
  }
}
