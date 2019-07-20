import React from 'react';
import uuidv from 'uuid/v4';
import DealItem from './DealItem';

export default class DealList extends React.Component {
  render() {
    return (
      <div className="deal-list">
        {this.props.deals.map(deal => (
          <DealItem key={uuidv()} deal={deal} />
        ))}
      </div>
    );
  }
}
