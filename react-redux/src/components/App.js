import React from 'react';
import DealList from './DealList';
import About from './About';
import Artist from './ProductView';
import { HashRouter as Router, Route } from 'react-router-dom';
import FetchMoreButotn from './FetchMoreArtistButton';
import { browserHistory } from 'react-router-redux';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={DealList} />
        <Route exact path="/about/:artist" component={About} />
        <Route path="/product/:artist" component={Artist} />
        <Route exact path="/" component={FetchMoreButotn} />
      </Router>
    );
  }
}

export default App;
