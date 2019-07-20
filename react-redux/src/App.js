import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
import storeConfig from './store/storeConfig';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import FetchMoreArtistButton from './components/FetchMoreArtistButton';

async function getData() {
  const resp = await axios.get(
    'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=338b9e08c1e5acbef9302a70d6ea86f1&format=json'
  );

  const info = await axios.get(
    'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Billie Eilish&api_key=338b9e08c1e5acbef9302a70d6ea86f1&format=json'
  );
  console.log(resp.data.tracks.track.map(e => e.artist.name));
  console.log(info.data);

  const store = storeConfig({
    deals: resp.data.tracks.track.slice(0, 5),
    dealsLen: resp.data.tracks.track.length
  });

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

getData();
