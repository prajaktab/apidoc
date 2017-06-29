import React, { Component } from 'react';

import Data from "../../../../data";

export class checksumFormatPage extends Component {

  render() {
    return (
      <div>
        {Data.webIntegration.paymentApis.purchaseApi.checksumFormat.tags.join(" | ")}
        <p>If you are not passing any of the above parameters, you should leave those fields blank.</p>
      </div>
    )
  }
}
