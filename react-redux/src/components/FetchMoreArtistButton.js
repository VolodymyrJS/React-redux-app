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
        Fetch more tracks
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
    isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { fetchMoreTracks }
)(FetchMoreArtistButton);
