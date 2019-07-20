import React from 'react';
import DealList from './DealList';
import axios from 'axios';
import { Provider } from '../AppContext';
import FetchMoreArtistButton from './FetchMoreArtistButton';

export default class App extends React.Component {
  state = {
    deals: this.props.initialDeals,
    dealsLenght: this.props.initialDealsLenght
  };

  appContext = {
    expandOneDeal: dealKey => {
      this.setState(prevState => ({
        deals: prevState.deals.map(deal => ({
          ...deal,
          isExpanded: deal.listeners === dealKey
        }))
      }));
    },
    showMoreDeals: async event => {
      event.preventDefault();
      const resp = await axios.get(
        'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=338b9e08c1e5acbef9302a70d6ea86f1&format=json'
      );
      this.setState(prevState => ({
        deals: [...prevState.deals, ...resp.data.tracks.track.slice(5)],
        buttonState: false
      }));
    }
  };

  render() {
    return (
      <Provider value={this.appContext}>
        <div>
          <DealList deals={this.state.deals} />
          <FetchMoreArtistButton
            deals={this.state.deals}
            dealsLenght={this.state.dealsLenght}
          />
        </div>
      </Provider>
    );
  }
}
