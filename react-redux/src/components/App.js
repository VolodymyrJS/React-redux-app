import React from 'react';
import DealList from './DealList';

export default class App extends React.Component {
  state = {
    deals: this.props.initialDeals
  };
  expandOneDeal = dealKey => {
    this.setState(prevState => ({
      deals: prevState.deals.map(deal => ({
        ...deal,
        isExpanded: deal.key === dealKey
      }))
    }));
  };
  render() {
    return (
      <DealList onDealClick={this.expandOneDeal} deals={this.state.deals} />
    );
  }
}
