import React from 'react';
import uuidv from 'uuid/v4';
import DealItem from './DealItem';
import { connect } from 'react-redux';

class DealList extends React.Component {
  render() {
    return (
      <div className="deal-list">
        <h1 className="title">List of tracks</h1>
        {this.props.tracks.map(deal => (
          <ol key={uuidv()}>
            <li>
              <DealItem deal={deal} />
            </li>
          </ol>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tracks: state.tracks
});

export default connect(mapStateToProps)(DealList);
