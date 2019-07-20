import React from 'react';
import uuidv from 'uuid/v4';
import DealItem from './DealItem';
import { connect } from 'react-redux';

class DealList extends React.Component {
  render() {
    return (
      <div className="deal-list">
        {this.props.deals.map(deal => (
          <div key={uuidv()}>
            <DealItem deal={deal} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deals: state.deals,
  dealsLen: state.dealsLen
}); //data

export default connect(mapStateToProps)(DealList);
