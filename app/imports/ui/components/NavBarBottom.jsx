import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Header, Icon } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    const menuStyle = { marginBottom: '10px',
      fontFamily: 'Oswald, Arial, Helvetica, sans-serif',
    };
    const itemStyle = { paddingLeft: '5px', paddingRight: '5px' };
    const icons = ['facebook', 'twitter', 'youtube', 'dollar', 'instagram'];

    return (
      <Menu style={menuStyle} attached="top" borderless inverted compact color='blue'>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Header inverted as='h1'>Connect with us: </Header>
        </Menu.Item>
        {icons.map((iconName) => (
          <Menu.Item key={iconName} style={itemStyle}>
            <Icon circular link={true} name={iconName} />
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

// Declare the types of all properties.
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(NavBarContainer);
