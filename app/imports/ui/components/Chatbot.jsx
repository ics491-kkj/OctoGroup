import React from 'react';

/** The Chatbot that appears at the bottom corner of the page. From Google's DialogFlow */
class Chatbot extends React.Component {
  render() {
    return (
      <div>
        <df-messenger
          chat-icon="https:&#x2F;&#x2F;mauitime.com&#x2F;wp-content&#x2F;uploads&#x2F;2019&#x2F;04&#x2F;oha-logo-courtersy-office-of-hawaiian-affairs.png"
          intent="WELCOME"
          chat-title="oha-chatbot"
          agent-id="902db386-09c4-42fd-8e20-4c3aaa26070a"
          language-code="en"
        ></df-messenger>
      </div>
    );
  }
}

export default Chatbot;
