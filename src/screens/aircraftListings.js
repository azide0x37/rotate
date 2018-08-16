import React, {
  Component
} from 'react';

import {
  Button,
  Card,
  Container,
  Icon,
  Image,
  Modal,
  Segment,
  Table
} from 'semantic-ui-react'

import CreateAircraft from '../components/createAircraft'
//import InspectAircraft from '../components/inspectAircraft'

import {
  API
} from 'aws-amplify';
import _ from 'lodash';


let apiName = 'AircraftCRUD';
let path = '/Aircraft';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet'
]

export default class AircraftListings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: {},
      inspecting: false
    }
    this.getListings = this.getListings.bind(this);
  }

  getListings() {
    API.get(apiName, path).then(response => {
      this.setState({
        listings: response.data
      });
    });
  }

  componentDidMount() {
    this.getListings()
  }

  render() {
    const { listings, inspecting, current_id } = this.state;
    return (
      <Segment>
        <CreateAircraft getListings={this.getListings} />
        <Container style={{padding: 10}}>
          <Card.Group>
          {_.map(listings, ({ID, Title, Price, Description, Type, Registration, Photos}) => (
              <Modal trigger={<Card key={ID} onClick={() => this.setState({current_id: ID, inspecting: true})}>
                              { Photos != null ? <Image src={Photos.values[0]} /> : null }
                              <Card.Content>
                                <Card.Header>
                                  {Title}
                                </Card.Header>
                                <Card.Meta>
                                  $ {Price}
                                </Card.Meta>
                                <Card.Meta>
                                  Type: {Type}
                                </Card.Meta>
                                <Card.Meta>
                                  Registration: {Registration}
                                </Card.Meta>
                                <Card.Description>
                                  {Description}
                                </Card.Description>
                              </Card.Content>
                            </Card>} closeIcon={true} open={this.state.modalOpen} onClose={this.handleClose}>
                <Modal.Header icon='archive' >{Title} - ${Price}</Modal.Header>
                <Modal.Content>
                  {colors.map(color => (
                    <Table color={color} key={color} inverted>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell>Food</Table.HeaderCell>
                          <Table.HeaderCell>Calories</Table.HeaderCell>
                          <Table.HeaderCell>Protein</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>

                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>Apples</Table.Cell>
                          <Table.Cell>200</Table.Cell>
                          <Table.Cell>0g</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                          <Table.Cell>Orange</Table.Cell>
                          <Table.Cell>310</Table.Cell>
                          <Table.Cell>0g</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  ))}
                </Modal.Content>
                <Modal.Actions>
                  <Button color='red'>
                    <Icon name='remove' /> Exit
                  </Button>
                  <Button color='green'>
                    <Icon name='checkmark' /> Inquire
                  </Button>
                </Modal.Actions>
              </Modal>
            ))}
          </Card.Group>
        </Container>
      </Segment>
    );
  }
}
