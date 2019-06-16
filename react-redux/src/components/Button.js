import React from 'react';

export default class Button extends React.Component {
  clickHandler = () => {
    this.props.onClick(this.props.increment);
  };
  render() {
    return (
      <button onClick={this.clickHandler}>+ {this.props.increment}</button>
    );
  }
}
