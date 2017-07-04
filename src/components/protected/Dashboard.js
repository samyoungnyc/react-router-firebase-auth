import React, { Component } from 'react';
import { getData } from './Data.js'

export default class Dashboard extends Component {
  render () {

    getData();

    return (
      <div>
        Dashboard. This is a protected page. You can only see this if you're authed.
      </div>
    )
  }
}