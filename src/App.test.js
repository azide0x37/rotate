import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library'

import App from './App';

// NOTE: Screens
import AircraftListings from './screens/aircraftListings'
import CreateAircraft from './components/createAircraft'

// NOTE: Components


//NOTE: Lambda teests

describe('AircraftListings', () => {
  it('renders AircraftListings', () => {
    const { queryByText } = render(<AircraftListings />)
    const header = queryByText('Item Name')
    expect(header.innerHTML).toBe('Item Name')
  })
})

describe('CreateAircraft', () => {
  it('renders CreateAircraft', () => {
    const { queryByText } = render(<CreateAircraft />)
    const button = queryByText('+ Add Item')
    expect(button.innerHTML).toBe('+ Add Item')
  })
})
