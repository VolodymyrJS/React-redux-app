import React from 'react';
import uuidv from 'uuid/v4';
import { connect } from 'react-redux';
import { expandOneDeal, hideOneDeal } from '../store/actions';

class DealItem extends React.Component {
  styleImg = () => ({
    height: '50px',
    padding: '10px',
    borderRadius: '7px',
    borderBottom: '2px solid #ccc',
    borderTop: '2px solid #ccc'
  });
  styleTitle = () => ({
    fontSize: '35px',
    fontStyle: 'italic',
    padding: '10px',
    color: 'lightblue'
  });
  stylePrice = () => ({
    fontSize: '30px',
    color: 'orange',
    padding: '10px'
  });
  general = () => ({
    backgroundColor: '#222'
  });
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
      <div style={this.general()} onClick={this.showImagesForOneArtist}>
        <div style={this.styleTitle()}>{name}</div>
        <div style={this.styleTitle()}>
          {artist.name}
          <div>
            <button
              style={{
                margin: '10px',
                padding: '10px',
                borderRadius: '7px',
                fontSize: '20px'
              }}
            >
              About artist
            </button>
          </div>
        </div>
        <div style={this.stylePrice()}>{playcount}</div>
        {this.props.deal.isExpanded && (
          <div>
            {imageSrc.map(imgUrl => (
              <img
                alt="img"
                style={this.styleImg()}
                key={uuidv()}
                src={imgUrl}
              />
            ))}
          </div>
        )}
        <button onClick={this.hideOneDealClick}>Hide</button>
      </div>
    );
  }
}

export default connect(
  null,
  { expandOneDeal, hideOneDeal }
)(DealItem);
