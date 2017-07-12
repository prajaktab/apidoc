import React, {Component} from 'react';
import SideBar from "../../../sideBar";
import Data from "../../../../data"
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
export class requestParametersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: Data.Apis.nonPaymentApis.fetchtransactionaldetails.requestParameters.description,
      fieldName: Data.Apis.nonPaymentApis.fetchtransactionaldetails.requestParameters.fieldName
    }
  }
  check(data) {
    if (data.length > 0) {
      var str = "Datatype: "
      for (let index in data) {
        str += data[index] + " "
      }
    }
    return str
  }
  render() {
    let length = this.state.fieldName.length > this.state.description.length  ? this.state.fieldName.length : this.state.description.length;
    let arr = [];
    for(let i = 0; i < length; i++) {
      arr[i] = null;
    }
    return (
      <div>
      <div className="main-content">
        <div className="api-desc">
        <CardHeader
            title="Request Parameters"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Field Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {arr.map((field, index) => {
              return (
                <TableRow key={index}>
                  <TableRowColumn>
                    <div>{this.state.fieldName[index].text}</div>
                    <b>{this.state.fieldName[index].mandatory == 1
                        ? "Mandatory"
                        : ""}</b>
                  </TableRowColumn>
                  <TableRowColumn>
                    {(this.state.description[index] && typeof this.state.description[index] != "undefined")
                      ? (
                        <div>
                          <div>{this.state.description[index].text}</div>
                          <div>
                            {this.check(this.state.description[index].datatype)}
                          </div>
                          <div>{parseInt(this.state.description[index].lengthd) > 0
                              ? ("length:" + this.state.description[index].length)
                              : ""}</div >
                          <div>{parseInt(this.state.description[index].minLength) > 0
                              ? ("minLength:" + this.state.description[index].minLength)
                              : ""}</div>
                          <div>
                            {parseInt(this.state.description[index].maxLength) > 0
                              ? ("maxLength:" + this.state.description[index].maxLength)
                              : ""}
                          </div>
                        </div>
                      )
                      : null}
                  </TableRowColumn>
                </TableRow>
              )
            })}
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
        < /div>
      )
    }
  }
