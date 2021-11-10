import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Header, Icon } from 'semantic-ui-react';

/** The NavBarTop appears at the top of every page. Rendered by the App Layout component. */
class NavBarTop extends React.Component {
  render() {
    const menuStyle = {
      marginBottom: '0px',
      paddingLeft: '3em',
      fontFamily: 'Oswald, Arial, Helvetica, sans-serif',
      background: '#3469CA',
    };
    const itemStyle = { paddingLeft: '5px', paddingRight: '5px' };
    const icons = ['facebook', 'twitter', 'youtube', 'dollar', 'instagram'];

    return (
      <Menu style={menuStyle} attached="top" borderless inverted compact>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Header inverted as='h3'>Connect with us: </Header>
        </Menu.Item>
        {icons.map((iconName) => (
          <Menu.Item key={iconName} style={itemStyle}>
            <Icon circular inverted link={true} color='blue' name={iconName} />
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default NavBarTop;
