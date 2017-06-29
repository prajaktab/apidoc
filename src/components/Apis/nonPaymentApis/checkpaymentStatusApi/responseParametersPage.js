import React, { Component } from 'react';

import Data from "../../../../data"

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export class responseParametersPage extends Component {

  render() {
    return (
      <div>
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Field Name</TableHeaderColumn>
          <TableHeaderColumn>Data Type</TableHeaderColumn>
          <TableHeaderColumn>Min Value</TableHeaderColumn>
          <TableHeaderColumn>Max Value</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
      {Data.webIntegration.paymentApis.purchaseApi.responseParameters.fieldName.map((field, index) => {
        return (
        <TableRow key={index}>
        <TableRowColumn>
          <div>{field}</div>
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.paymentApis.purchaseApi.responseParameters.dataType[index]}
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.paymentApis.purchaseApi.responseParameters.minValue[index]}
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.paymentApis.purchaseApi.responseParameters.maxValue[index]}
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.paymentApis.purchaseApi.responseParameters.description[index]}
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
