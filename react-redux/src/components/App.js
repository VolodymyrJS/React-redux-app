import React from 'react';
import DealList from './DealList';
import FetchMoreArtistButton from './FetchMoreArtistButton';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <DealList />
          <FetchMoreArtistButton
          //deals={this.deals}
          // dealsLenght={this.props.dealsLen}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
