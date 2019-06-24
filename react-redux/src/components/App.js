import React from 'react';
import DealList from './DealList';
import axios from 'axios';

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
  showMoreDeals = async event => {
    event.preventDefault();
    const resp = await axios.get('https://bakesaleforgood.com/api/deals');
    this.setState(prevState => ({
      deals: [...prevState.deals, ...resp.data.slice(6)]
    }));
  };
  render() {
    return (
      <div>
        <DealList onDealClick={this.expandOneDeal} deals={this.state.deals} />
        <button
          onClick={this.showMoreDeals}
          style={{
            margin: '10px',
            padding: '10px',
            borderRadius: '7px',
            fontSize: '20px'
          }}
        >
          Show more deals...
        </button>
      </div>
    );
  }
}
