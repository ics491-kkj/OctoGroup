import React from 'react';
import { Label, Placeholder, Segment } from 'semantic-ui-react';

/** Temporary solution to filling up the landing page. Where content would be, if time permits. */
class PlaceholderSegment extends React.Component {
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

export default PlaceholderSegment;
