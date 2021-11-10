import React from 'react';

/** The Chatbot that appears at the bottom corner of the page. From Google's DialogFlow */
class Chatbot extends React.Component {
  render() {
    return (
      <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/902db386-09c4-42fd-8e20-4c3aaa26070a"></iframe>
    );
  }
}

export default Chatbot;
