import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import Data from "../../../../data"

export class errorCodesPage extends Component {

  render() {
    return (
      <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Code</TableHeaderColumn>
          <TableHeaderColumn>Message</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
      {Data.webIntegration.paymentApis.purchaseApi.errorCodes.errorCode.map((text, index) => {
        return (
        <TableRow key={index}>
        <TableRowColumn>
          {text}
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.paymentApis.purchaseApi.errorCodes.message[index]}
        </TableRowColumn>
        </TableRow>
        )}
      )};
      </TableBody>
      </Table>
      </div>
    )

  }
}
