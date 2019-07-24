import React from 'react';
import { connect } from 'react-redux';
import { fetchMoreTracks } from '../store/actions';

class FetchMoreArtistButton extends React.Component {
  render() {
    return (
      <button
        disabled={this.props.isFetching}
        onClick={this.props.fetchMoreTracks}
      >
        this.props.isFetching}Fetch
      </button>
    );
  }
}

export default connect(
  null,
  { fetchMoreTracks }
)(FetchMoreArtistButton);
