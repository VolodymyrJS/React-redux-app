import React from 'react';
import uuidv from 'uuid/v4';
import { connect } from 'react-redux';
import {
  expandOneDeal,
  hideOneDeal,
  putArtistDataToState
} from '../store/actions/actions';
import { Link } from 'react-router-dom';
import { styles } from '../css/tracks';

class DealItem extends React.Component {
  hideOneDealClick = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.hideOneDeal(this.props.deal.listeners);
  };
  showImagesForOneArtist = event => {
    event.preventDefault();
    this.props.expandOneDeal(this.props.deal.listeners);
  };

  render() {
    const { artist, name, playcount, image } = this.props.deal;
    var imageSrc = image.map(element => element['#text']);
    return (
      <div style={styles.general}>
        <div style={styles.styleTitle}>{name}</div>
        <div style={styles.styleTitle}>
          {artist.name}
          <div>
            <Link to={`/product/${artist.name}`}>About artist</Link>
          </div>
        </div>
        <div style={styles.stylePrice}>{playcount}</div>
        {this.props.deal.isExpanded && (
          <div>
            {imageSrc.map(imgUrl => (
              <img
                alt="img"
                style={styles.styleImg}
                key={uuidv()}
                src={imgUrl}
              />
            ))}
          </div>
        )}
        <div>
          <button onClick={this.hideOneDealClick}>Hide</button>
        </div>
        <div>
          <button onClick={this.showImagesForOneArtist}>
            Show image for track
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { expandOneDeal, hideOneDeal, putArtistDataToState }
)(DealItem);
