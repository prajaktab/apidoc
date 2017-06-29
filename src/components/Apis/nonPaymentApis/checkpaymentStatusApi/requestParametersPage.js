import React, {Component} from 'react';
import Data from "../../../../data"
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
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
            {Data.webIntegration.paymentApis.purchaseApi.requestParameters.fieldName.map((field, index) => {
              return (
                <TableRow key={index}>
                  <TableRowColumn>
                    <div>{field.text}</div>
                    <b>{field.mandatory == 1
                        ? "Mandatory"
                        : ""}</b>
                  </TableRowColumn>
                  <TableRowColumn style={{
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}>
                    {Data.webIntegration.paymentApis.purchaseApi.requestParameters.dataType[index]}
                  </TableRowColumn>
                  <TableRowColumn>
                    {Data.webIntegration.paymentApis.purchaseApi.requestParameters.minValue[index]}
                  </TableRowColumn>
                  <TableRowColumn>
                    {Data.webIntegration.paymentApis.purchaseApi.requestParameters.maxValue[index]}
                  </TableRowColumn>
                  <TableRowColumn style={{
                    whiteSpace: 'normal',
                    wordWrap: 'break-word'
                  }}>
                    {Data.webIntegration.paymentApis.purchaseApi.requestParameters.description[index]}
                  </TableRowColumn>
                </TableRow>
              )
            })};
          </TableBody>
        </Table>
      </div>
    )
  }
}
