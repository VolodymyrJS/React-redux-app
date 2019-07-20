import React from 'react';
import { connect } from 'react-redux';
// import { Consumer } from '../AppContext';

class FetchMoreArtistButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.fetchMoreTracks}>Show more tracks...</button>
    );
  }
}

const cb2 = () => ({
  fetchMoreTracks: () => {
    //our fetch data
  }
});

export default connect(
  null,
  cb2
)(FetchMoreArtistButton);
