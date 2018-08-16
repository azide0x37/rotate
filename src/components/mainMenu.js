import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class MainMenu extends Component {
  state = {
    activeItem: 'listings',
    modalOpen: true
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.updateRoute(name)
  }

  handleLogin = () => {}

  render() {
    const { activeItem } = this.state
    return (
      <Menu
        stackable
        color={'teal'}>
        <Menu.Item
          name='home'
          color='teal'>
        {/*
          // TODO: Get a logo
          <img src='/logo.png' />
        */}
          <Icon
            name="shop"
            size='large'/>
            Rotate.Sale
        </Menu.Item>
        <Menu.Item
          name='listings'
          color='violet'
          active={activeItem === 'listings'}
          onClick={this.handleItemClick}>
          <Icon name="chess knight"/>
          Listings
        </Menu.Item>
        <Menu.Item
          name='efficiency'
          color='pink'
          active={activeItem === 'efficiency'}
          onClick={this.handleItemClick}>
          <Icon name='flask'/>
          Efficiency
        </Menu.Item>
        <Menu.Item
          name='flightlevels'
          color='blue'
          active={activeItem === 'flightlevels'}
          onClick={this.handleItemClick}>
          <Icon name='lightbulb'/>
          Flight Levels
        </Menu.Item>
{/*
        <Menu.Item
          name='calculator'
          color='pink'
          active={activeItem === 'calculator'}
          onClick={this.handleItemClick}>
          <Icon name='flask'/>
          Calculator
        </Menu.Item>
        <Menu.Item
          name='syncronicity'
          color='brown'
          active={activeItem === 'syncronicity'}
          onClick={this.handleItemClick}>
          <Icon name="eye"/>
          Syncronicity
        </Menu.Item>
        <Menu.Item
          name='crucibles'
          color='violet'
          active={activeItem === 'crucibles'}
          onClick={this.handleItemClick}>
          <Icon name="chess knight"/>
          Crucibles
        </Menu.Item>
*/}
        <Menu.Item
          name='subreddit'
          color='yellow'
          active={activeItem === 'subreddit'}
          onClick={()=> window.open("https://www.reddit.com/r/flying/", "_blank")}>
          <Icon name="reddit alien"/>
          /r/Flying
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='login'
            color='grey'
            active={activeItem === 'login'}
            onClick={this.handleLogin}>
            <Icon name="privacy"/>
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
