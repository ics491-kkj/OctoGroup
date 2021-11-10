import React from 'react';
import { Label, Placeholder, Segment } from 'semantic-ui-react';

/** A transparent menu that's fixed to the bottom to carry the chatbot button. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
      <Segment raised>
        <Label attached='top' color='green'/>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line/>
            <Placeholder.Line/>
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line/>
            <Placeholder.Line/>
          </Placeholder.Paragraph>
        </Placeholder>
      </Segment>
    );
  }
}

export default Footer;
