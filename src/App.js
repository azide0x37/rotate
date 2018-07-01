import React, { Component } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react'
import {
  Icon,
  Menu,
  Segment
} from 'semantic-ui-react'

import AircraftListings from './screens/aircraftListings'

import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

//let apiName = 'AircraftCRUD';
//let path = '/Aircraft';

class App extends Component {
  componentDidMount() {
//  API.get(apiName, path).then(response => {
//    console.log(response)
//  });
  }

  render() {
    return (
      <Segment>
        <Menu>
           <Menu.Item name='home'> <Icon name="shop"/></Menu.Item>
           <Menu.Item name='Items'/>
           <Menu.Item name='aboutUs' />
         </Menu>
         <AircraftListings />
      </Segment>
    );
  }
}

export default withAuthenticator(App);
