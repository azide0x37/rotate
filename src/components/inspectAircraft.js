import React, {
  Component
} from 'react';

import {
  Form,
  Modal,
  Button,
} from 'semantic-ui-react'

import { API } from 'aws-amplify';

//import AircraftImageUploader from './imageUploader'

const uuidv1 = require('uuid/v1');

export default class InspectAircraft extends Component {
  constructor(props) {
      super(props)
      this.state = {
        title: 'Default',
        price: 35000,
        registration: 'N420EX',
        type: 'C172',
        equipment: ['Garmin 230EX'],
        ttaf: 0,
        smoh: 0,
        sfoh: 0,
        spoh: 0,
        description: 'Test Description',
        logs: 'LOGS LOGS LOGS',
        photos: [],
        modalOpen: true
      }
      this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event, {name, value}) {
    this.setState({ [name]: value });
  }

  schema = {
    "Description": "INSERT VALUE HERE",
    "Equipment": "INSERT VALUE HERE",
    "ID": "INSERT VALUE HERE",
    "Logs": "INSERT VALUE HERE",
    "Photos": "INSERT VALUE HERE",
    "Registration": "INSERT VALUE HERE",
    "SFOH": "INSERT VALUE HERE",
    "SMOH": "INSERT VALUE HERE",
    "SPOH": "INSERT VALUE HERE",
    "TTAF": "INSERT VALUE HERE",
    "Title": "INSERT VALUE HERE",
    "Type": "INSERT VALUE HERE"
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render () {
    const { title, price, registration, type, equipment, ttaf, smoh, sfoh, spoh, description, logs } = this.state;
    return (
      <Modal trigger={true} closeIcon={true} open={this.state.modalOpen} onClose={this.handleClose}>
         <Modal.Header>List an Aircraft!</Modal.Header>
         <Modal.Content>
         </Modal.Content>
       </Modal>
    );
  }
}
