import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Header, Input } from 'semantic-ui-react';

/** The NavBarBottom appears at the top of every page, beneath NavBarTop. Rendered by the App Layout component. */
class NavBarBottom extends React.Component {
  render() {
    const menuStyle = {
      margin: '0px',
      marginBottom: '3em',
      paddingLeft: '3em',
      paddingRight: '3em',
      fontFamily: 'Oswald, Arial, Helvetica, sans-serif',
      backgroundColor: 'white',
    };
    return (
      <Menu style={menuStyle} attached="top" borderless compact>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Header as='h1'>Office of Hawaiian Affairs</Header>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='about'>
            About
          </Menu.Item>
          <Menu.Item name='our-foundation'>
            Our Foundation
          </Menu.Item>
          <Menu.Item name='our-directions'>
            Our Directions
          </Menu.Item>
          <Menu.Item name='our-roles'>
            Our Roles
          </Menu.Item>
          <Menu.Item name='resources'>
            Resources
          </Menu.Item>
          <Menu.Item name='search'>
            <Input
              transparent
              icon={{ name: 'search', link: true }}
              placeholder='Search...'
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavBarBottom;
