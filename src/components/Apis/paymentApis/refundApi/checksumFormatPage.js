import React, { Component } from 'react';

import Data from "../../../data";

export class checksumFormatPage extends Component {

  render() {
    return (
      <div>
        {Data.webIntegration.refundApi.checksumFormat.tags.join(" | ")}
      </div>
    )
  }
}
