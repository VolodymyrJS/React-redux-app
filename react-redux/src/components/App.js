import React from 'react';
import DealList from './DealList';

export default class App extends React.Component {
  render() {
    console.log(this.props.deals);
    return <DealList deals={this.props.deals} />;
  }
}
