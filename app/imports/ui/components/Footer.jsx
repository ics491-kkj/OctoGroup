import React from 'react';
import { Segment } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const segStyle = {
      paddingTop: '15px',
      paddingLeft: '2em',
      paddingRight: '2em',
      background: '#264F8F',
    };
    return (
      <Segment style={segStyle}>
      </Segment>
    );
  }
}

export default Footer;
