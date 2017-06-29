import React, {Component} from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import Data from "../../data";
export class integrationKitsPage extends Component {
  render() {
    return (
      <div>
        {Data.webIntegration.integrationKits.desc}
        <ol>
          {Data.webIntegration.integrationKits.compulsary.map((text) => {
            return <li>{text}</li>
          })}
        </ol>
      </div>
    )
  }
}
