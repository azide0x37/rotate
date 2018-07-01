import React, {
  Component
} from 'react';

import {
  Card,
  Container,
  Image,
  Segment
} from 'semantic-ui-react'

import CreateAircraft from '../components/createAircraft'

import { API } from 'aws-amplify';
import _ from 'lodash';


let apiName = 'AircraftCRUD';
let path = '/Aircraft';

export default class AircraftListings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listings: {}
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
    const { listings } = this.state;
    return (
      <Segment>
        <CreateAircraft getListings={this.getListings} />
        <Container style={{padding: 10}}>
          <Card.Group>
          {_.map(listings, ({ID, Title, Price, Description, Type, Registration, Photos}) => (
              <Card key={ID}>
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
              </Card>
            ))}
          </Card.Group>
        </Container>
      </Segment>
    );
  }
}
