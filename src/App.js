import React, { Component } from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react'
import {
  Grid,
  Segment
} from 'semantic-ui-react'

import MainMenu from './components/mainMenu';

import AircraftListings from './screens/aircraftListings'
//import Efficiency from './screens/efficiency'
//import FlightLevels from './screens/flightLevels'

import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

//let apiName = 'AircraftCRUD';
//let path = '/Aircraft';

export default class App extends Component {
  state = {
    route: 'listings',
  }
// withAuthenticator()
  componentDidMount() {
//  API.get(apiName, path).then(response => {
//    console.log(response)
//  });
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.updateRoute(name)
  }

  render() {
    const { route } = this.state
    return (
      <Segment>
        <MainMenu updateRoute={(route) => this.setState({route: route})}  />
         <Grid>
           <Grid.Row>
             <Grid.Column>
               { route === 'listings' ? <AircraftListings /> : null }
               { route === 'efficiency' ? <div><h1>efficiency</h1></div> : null }
               { route === 'flightlevels' ? <div><h1>flightlevels</h1></div> : null }
             </Grid.Column>
           </Grid.Row>
         </Grid>
      </Segment>
    );
  }
}
