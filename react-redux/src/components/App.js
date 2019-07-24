import React from 'react';
import DealList from './DealList';
import Artist from './ProductView';
import { HashRouter as Router, Route } from 'react-router-dom';
import FetchMoreButotn from './FetchMoreArtistButton';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={DealList} />
        <Route path="/product/:artist" component={Artist} />
        <Route exact path="/" component={FetchMoreButotn} />
      </Router>
    );
  }
}

export default App;
