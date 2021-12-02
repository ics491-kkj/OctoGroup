import React from 'react';
import { Grid } from 'semantic-ui-react';
import PlaceholderSegment from '../components/PlaceholderSegment';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <Grid id='landing-page' columns={3} stackable padded>
        <Grid.Column>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
        </Grid.Column>
        <Grid.Column>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
        </Grid.Column>
        <Grid.Column>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
          <PlaceholderSegment/>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Landing;
