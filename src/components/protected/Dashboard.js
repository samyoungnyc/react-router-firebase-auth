import React, { Component } from 'react';
import { testingDataStuff } from './Data.js'

export default class Dashboard extends Component {
  render () {
    testingDataStuff();
    return (
      <div>
        Dashboard. This is a protected route. You can only see this if you're authed.
      </div>
    )
  }
}