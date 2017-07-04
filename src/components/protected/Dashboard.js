import React, { Component } from 'react';
import { getData } from './Data.js'

export default class Dashboard extends Component {

  state = {
  	data: null,
  	loading: true
  }

  componentDidMount() {
  	getData().then(result => {
  		this.setState({
  			data: result,
  			loading: false
  		})
  	});
  }

  render () {

    return (
      <div>
        {this.state.loading ? "Dashboard. This is a protected page. You can only see this if you're authed.": JSON.stringify(this.state.data)} 
      </div>
    )
  }
}