import React, { Component } from 'react';
import Data, { getUsers } from './Data.js'

export default class Dashboard extends Component {
  render () {
    console.log("RENDERING FIRST");
    getUsers();
    
    // constructor() {
    //   super();
    //   this.state = {

    //   }
    // }
    
    return (
      <div>
        Dashboard. This is a protected page. You can only see this if you're authed.
      </div>
    )
  }
}