import React from 'react';
import Button from './Button';

export default class App extends React.Component {
  state = {
    totalCounter: 0,
    time: new Date().toLocaleString()
  };
  onButtonClick = increment => {
    this.setState(prevState => ({
      totalCounter: prevState.totalCounter + increment
    }));
  };
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(() => ({
        time: new Date().toLocaleString()
      }));
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ fontSize: '25px', textAlign: 'center' }}>
          <div>{this.state.time}</div>
          <Button increment={1} onClick={this.onButtonClick} />
          <Button increment={5} onClick={this.onButtonClick} />
          <Button increment={10} onClick={this.onButtonClick} />
          <div>Total Counter is: {this.state.totalCounter}</div>
        </div>
      </React.Fragment>
    );
  }
}
