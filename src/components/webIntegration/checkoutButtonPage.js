import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import Data from "../../data";

export class OverviewPage extends Component {

  render() {
    return (
      <div>
          { Data.introduction.overview.desc }
          <ol>
            { Data.introduction.overview.compulsary.map((text) => {
              return <li>{text}</li>
            })}
          </ol>
      </div>
    )
  }
}
