import React from 'react';
import { Menu } from 'semantic-ui-react';
import Chatbot from './Chatbot';

/** A transparent menu that's fixed to the bottom to carry the chatbot button. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const style = {
      marginBottom: '2em',
      marginRight: '2em',
    };
    return (
      <Menu secondary fixed='bottom'>
        <Menu.Menu position='right'>
          <Menu.Item style={style}>
            <Chatbot/>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Footer;
