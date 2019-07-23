import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
import storeConfig from './store/storeConfig';
import { Provider } from 'react-redux';
import { queryTrack, queryArtist } from './fetchConfig';
//import FetchMoreArtistButton from './components/FetchMoreArtistButton';

async function getData() {
  const listOfTracks = await axios.get(queryTrack);
  const aboutArtist = await axios.get(queryArtist);

  const store = storeConfig({
    tracks: listOfTracks.data.tracks.track.slice(0, 5),
    info: aboutArtist.data,
    artistName: ''
  });

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

getData();
