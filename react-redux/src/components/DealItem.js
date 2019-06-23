import React from 'react';

export default class DealItem extends React.Component {
  styleImg = () => ({
    height: '150px',
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
    const { title, price, media } = this.props.deal;
    return (
      <div style={this.general()}>
        <div style={this.styleTitle()}>{title}</div>
        <div style={this.stylePrice()}>{price}</div>
        <div>
          {media.map(imgUrl => (
            <img style={this.styleImg()} key={Math.random()} src={imgUrl} />
          ))}
        </div>
      </div>
    );
  }
}
