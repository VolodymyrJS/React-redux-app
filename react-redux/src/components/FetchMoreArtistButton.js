import React from 'react';
import { Consumer } from '../AppContext';

export default class FetchMoreArtistButtonContainer extends React.Component {
  render() {
    return (
      <Consumer>
        {({ showMoreDeals }) => (
          <button
            onClick={showMoreDeals}
            style={
              this.props.deals.length !== this.props.dealsLenght
                ? {
                    margin: '10px',
                    padding: '10px',
                    borderRadius: '7px',
                    fontSize: '20px'
                  }
                : { visibility: 'hidden' }
            }
          >
            Show more deals...
          </button>
        )}
      </Consumer>
    );
  }
}

// class FetchMoreArtistButton extends React.PureComponent {
//   render() {
//     return <button>Show more Artist...</button>
//   }
// }

