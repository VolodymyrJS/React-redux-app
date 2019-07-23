import React from 'react';
import { connect } from 'react-redux';
import uuidv from 'uuid/v4';
import axios from 'axios';

class About extends React.Component {
  render() {
    const { image, tags } = this.props.info.artist;

    const imageSrc = image.map(element => element['#text']);

    const tagsValue = tags.tag.map(element => element.name);

    return (
      <div>
        <h2>{this.props.match.params.artist}</h2>
        <h3>Artist name:</h3>
        <div className="artist-name">{this.props.info.artist.name}</div>
        <div className="artist-images">
          <h3>Images:</h3>
          <div>
            {imageSrc.map(imgUrl => (
              <img alt="img" key={uuidv()} src={imgUrl} />
            ))}
          </div>
        </div>
        <div className="artist-tegs">
          <h3>Tags: </h3>
          {tagsValue.map(tag => (
            <p key={uuidv()}>{tag}</p>
          ))}
        </div>
        <div className="artist-description">
          <h3>Description:</h3>
          {this.props.info.artist.bio.content}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  info: state.info
});

export default connect(mapStateToProps)(About);
