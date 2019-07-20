import React from 'react';
import uuidv from 'uuid/v4';
import { Consumer } from '../AppContext';

export default class DealItem extends React.Component {
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
  render() {
    const { artist, name, playcount, image } = this.props.deal;
    var imageSrc = image.map(element => element['#text']);

    return (
      <Consumer>
        {appContext => {
          return (
            <div
              style={this.general()}
              onClick={() =>
                appContext.expandOneDeal(this.props.deal.listeners)
              }
            >
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
            </div>
          );
        }}
      </Consumer>
    );
  }
}
