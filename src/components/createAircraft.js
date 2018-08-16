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

export default class CreateAircraft extends Component {
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
        photos: []
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
      let apiName = 'AircraftCRUD';
      let path = '/Aircraft';
      let newItem = {
        body: {
          ID: uuidv1(),
          Title: this.state.title,
          Price: this.state.price,
          Description: this.state.description,
          Logs: this.state.logs,
          Registration: this.state.registration,
          TTAF: this.state.ttaf,
          SMOH: this.state.smoh,
          SPOH: this.state.spoh,
          SFOH: this.state.sfoh,
          Type: this.state.type,
          Equipment: this.state.equipment,
          Photos: this.state.photos
        }
      }
      API.post(apiName, path, newItem).then(response => {
      console.log(response)
    }).then(() => {
      this.props.getListings()
    }).catch(error => {
        console.log(error.response)
      });
      event.preventDefault();
      this.handleClose()
    }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render () {
    const { title, price, registration, type, equipment, ttaf, smoh, sfoh, spoh, description, logs } = this.state;
    return (
      <Modal trigger={<Button onClick={this.handleOpen}>+ List an Airplane</Button>} closeIcon={true} open={this.state.modalOpen} onClose={this.handleClose}>
         <Modal.Header>List an Aircraft!</Modal.Header>
         <Modal.Content>
           <Form onSubmit={this.handleSubmit}>
             <Form.Group unstackable widths={2}>
               <Form.Input name='title' label='Listing Title' placeholder='Enter Short Title...' onChange={this.handleChange}  value={title} />
               <Form.Input name='price' label='Asking Price' placeholder='$0.00' onChange={this.handleChange}  value={price} />
             </Form.Group>
             <Form.Group unstackable widths={3}>
               <Form.Input name='registration' label='Registration Number' placeholder='N420EX' onChange={this.handleChange}  value={registration} />
               <Form.Input name='type' label='Aircraft Type' placeholder='C172' onChange={this.handleChange}  value={type} />
               <Form.Input name='equipment' label='Equipment' placeholder='Garmin G430' onChange={this.handleChange}  value={equipment} />
             </Form.Group>
             <Form.Group unstackable widths={4}>
               <Form.Input name='ttaf' label='Total Time Airframe' placeholder='1000' onChange={this.handleChange}  value={ttaf} />
               <Form.Input name='smoh' label='Since Major Overhaul' placeholder='1000' onChange={this.handleChange}  value={smoh} />
               <Form.Input name='sfoh' label='Since Factory Overhaul' placeholder='1000' onChange={this.handleChange}  value={sfoh} />
               <Form.Input name='spoh' label='Since Propeller Overhaul' placeholder='1000' onChange={this.handleChange}  value={spoh} />
             </Form.Group>
             <Form.TextArea name='description' label='Aircraft Description' placeholder='Add a Description of the Aircraft...' onChange={this.handleChange}  value={description} />
             <Form.TextArea name='logs' label='Aircraft Logs' placeholder='Add Logs of the Aircraft...' onChange={this.handleChange}  value={logs} />
            <Form.Button type='submit'>Submit</Form.Button>
           </Form>
         </Modal.Content>
       </Modal>
    );
  }
}
