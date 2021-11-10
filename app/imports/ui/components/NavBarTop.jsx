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
    };
    const itemStyle = { paddingLeft: '5px', paddingRight: '5px' };
    const icons = ['facebook', 'twitter', 'youtube', 'dollar', 'instagram'];

    return (
      <Menu style={menuStyle} attached="top" borderless inverted compact color='blue'>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Header inverted as='h3'>Connect with us: </Header>
        </Menu.Item>
        {icons.map((iconName) => (
          <Menu.Item key={iconName} style={itemStyle}>
            <Icon circular inverted color='blue' link={true} name={iconName} />
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default NavBarTop;
