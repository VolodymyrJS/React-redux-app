import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

class ProductView extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { info: '' };
  // }

  // componentDidMount() {
  //   const nameForUrl = this.props.match.params.artist;
  //   const url_about = 'http://ws.audioscrobbler.com/2.0/';
  //   const method_obout = '?method=artist.getinfo&';
  //   const url_name = 'artist=' + nameForUrl + '&api_';
  //   const key_about = 'key=338b9e08c1e5acbef9302a70d6ea86f1';
  //   const format_about = '&format=json';
  //   const url = url_about + method_obout + url_name + key_about + format_about;
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => this.setState({ info: data.artist }));
  // }

  render() {
    return (
      <div>
        <h1>{console.log(this.props.aboutArtist)}</h1>
        {/* <h2>{this.state.info.name}</h2>
        <h3>{this.props.info}</h3> */}
        <h3>Product ID: {this.props.match.params.artist}</h3>
        <Link to={`/`}>Back to home</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  aboutArtist: state.artistData
});

export default connect(mapStateToProps)(ProductView);
