import React from 'react';
import { Popup, Button } from 'semantic-ui-react';

/** The Chatbot that appears at the bottom corner of the page. From Google's DialogFlow */
class Chatbot extends React.Component {
  render() {
    const style = {
      marginBottom: '2em',
      marginRight: '2em',
    };
    return (
      <Popup
        trigger={<Button primary content='Click me for help!'/>}
        content={<iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/902db386-09c4-42fd-8e20-4c3aaa26070a"/>}
        on='click'
        position='top right'
        inverted
        style={style}
      />
    );
  }
}

export default Chatbot;
