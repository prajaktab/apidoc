import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import SideBar from "../../../sideBar";
import Data from "../../../../data"
export class errorCodesPage extends Component {
  render() {
    return (
      <div>
      <div className="main-content">
        <div className="api-desc">
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Code</TableHeaderColumn>
              <TableHeaderColumn>Message</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {Data.Apis.nonPaymentApis.getrequeststatus.errorCodes.errorCode.map((text, index) => {
              return (
                <TableRow key={index}>
                  <TableRowColumn>
                    {text}
                  </TableRowColumn>
                  <TableRowColumn>
                    {Data.Apis.nonPaymentApis.getrequeststatus.errorCodes.message[index]}
                  </TableRowColumn>
                </TableRow>
              )
            })};
          </TableBody>
        </Table>
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
      </div>
    )
  }
}
