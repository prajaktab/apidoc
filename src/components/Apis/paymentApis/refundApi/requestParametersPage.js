import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import Data from "../../../data";

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
      {Data.webIntegration.refundApi.responseParameters.fieldName.map((field, index) => {
        return (
        <TableRow key={index}>
        <TableRowColumn>
          <div>{field.text}</div>
          <b>{field.mandatory == 1 ? "Mandatory" : ""}</b>
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.refundApi.responseParameters.dataType[index]}
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.refundApi.responseParameters.minValue[index]}
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.refundApi.responseParameters.maxValue[index]}
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.refundApi.responseParameters.description[index]}
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
