import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import {
  putArtistDataToState
} from '../store/actions';

class ProductView extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { info: '' };
  // }

  componentDidMount() {
    this.props.putArtistDataToState(this.props.match.params.artist);
  }

  render() {
    return (
      <div>
        {this.props.aboutArtist && (<div>
          <h1>{this.props.aboutArtist.name}</h1>
          {/* <h2>{this.state.info.name}</h2>
          <h3>{this.props.info}</h3> */}
          <h3>Product ID: {this.props.match.params.artist}</h3>
          <Link to={`/`}>Back to home</Link>
        </div>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  aboutArtist: state.artistData
});

export default connect(mapStateToProps, { putArtistDataToState })(ProductView);
