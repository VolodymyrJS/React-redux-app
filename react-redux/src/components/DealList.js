import React from 'react';
import DealItem from './DealItem';

export default class DealList extends React.Component {
  render() {
    return (
      <div className="deal-list">
        {this.props.deals.map(deal => (
          <DealItem
            key={deal.key}
            onClick={this.props.onDealClick}
            deal={deal}
          />
        ))}
      </div>
    );
  }
}
