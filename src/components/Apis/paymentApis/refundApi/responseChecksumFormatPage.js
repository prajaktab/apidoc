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

export class requestParametersPage extends Component {

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
      {Data.webIntegration.refundApi.requestParameters.fieldName.map((field, index) => {
        return (
        <TableRow key={index}>
        <TableRowColumn>
          <div>{field.text}</div>
          <b>{field.mandatory == 1 ? "Mandatory" : ""}</b>
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.refundApi.requestParameters.dataType[index]}
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.refundApi.requestParameters.minValue[index]}
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.refundApi.requestParameters.maxValue[index]}
        </TableRowColumn>
        <TableRowColumn>
          {Data.webIntegration.refundApi.requestParameters.description[index]}
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
